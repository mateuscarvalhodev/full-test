// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { BrowserRouter, Route, Routes } from 'react-router'
// import Clients from './pages/clients/index.tsx'
// import { SidebarProvider } from './components/ui/sidebar.tsx'
// import { AppSidebar } from './components/Sidebar/index.tsx'



// createRoot(document.getElementById('root')!).render(

//   <StrictMode>
//     <SidebarProvider>
//       <AppSidebar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/clients" element={<Clients />} />
//         </Routes>
//       </BrowserRouter>
//     </SidebarProvider>
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Clients from './pages/clients/index.tsx'
import SidebarLayout from './layout/SidebarLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<SidebarLayout />}>
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

