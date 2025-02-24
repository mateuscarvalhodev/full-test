import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Clients from './pages/clients/index.tsx'


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
