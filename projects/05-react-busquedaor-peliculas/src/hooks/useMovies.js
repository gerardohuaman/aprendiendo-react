import { searchMovies } from "../services/movies";
import { useRef, useState, useMemo, useCallback } from "react";

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    //useCallback solo se usa para las funciones
    //useCallback usa por debajo a useMemo
    const getMovies = useCallback(async ({ search }) => {
        if (search === previousSearch.current) return;
        //search es ''
        try {
          setLoading(true);
          setError(null);
          previousSearch.current = search;
          const newMovies = await searchMovies({ search });
          setMovies(newMovies);
        } catch (e) {
          setError(e.message);
        } finally {
          // esto se va a ejecutar
          // tanto en el try, como en el catch
          setLoading(false);
        }
    }, [])

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
