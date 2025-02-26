import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Clients from './pages/clients/index.tsx'
import SidebarLayout from './layout/SidebarLayout.tsx'
import SelectedClients from './pages/selectedClients/index.tsx'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<SidebarLayout />}>
          <Route path="/clients" element={<Clients />} />
          <Route path='/clientes-selecionados' element={<SelectedClients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

