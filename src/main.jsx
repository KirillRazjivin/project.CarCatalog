import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Route from './components/ui/Router'
import Home from './components/screens/home/Home'
import AuthProdiver from './Providers/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProdiver>
    <Route/>
    </AuthProdiver>
  </React.StrictMode>
)
