import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OurRouterProvider from './providers/OurRouterProvider.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <OurRouterProvider />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
