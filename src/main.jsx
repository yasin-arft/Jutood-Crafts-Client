import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OurRouterProvider from './providers/OurRouterProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OurRouterProvider />
  </React.StrictMode>,
)
