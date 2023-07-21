import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MainContextProvider from './Context/MainContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContextProvider>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </MainContextProvider>

);
