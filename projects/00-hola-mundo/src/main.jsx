import  React  from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

//Type of Cases:
// PascalCase
// camelCase
// snake_case
// kebab-case

const root = createRoot(document.getElementById('root'))

// Nombre de Componentes deben ser en PascalCase

root.render(
  <App />
)
