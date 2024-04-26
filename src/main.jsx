import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OurRouterProvider from './providers/OurRouterProvider.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <OurRouterProvider />
    </AuthProvider>
  </React.StrictMode>,
)
