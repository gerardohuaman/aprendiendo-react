import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newfact => setFact(newfact))
    }

    // no puedes usar React Query, SWR, axios, apollo ni librerías similares
    // solo useEffect y fetch nativo
    // para recuperar la cita al cargar la pagina
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}