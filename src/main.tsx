import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.scss'
import './assets/reset.css'
import Router from './Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
