import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './HelloWorld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld name="Focus Bear!" />
  </StrictMode>,
)
