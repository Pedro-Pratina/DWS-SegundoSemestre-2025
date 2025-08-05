import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouters } from './routers/AppRouters'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </StrictMode>,
)
