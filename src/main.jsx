import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopcontextProvider from './context/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopcontextProvider>
    <App />
    </ShopcontextProvider>
  </StrictMode>,
)
