import React from 'react'
import { createRoot } from 'react-dom/client'
import GiffExpertApp from './GiffExpertApp'
import './style.css'


const root = createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiffExpertApp />
  </React.StrictMode>
)
