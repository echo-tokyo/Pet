import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.scss'
import './assets/reset.css'
import Router from './Router.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <Router />
    </Provider>
  </React.StrictMode>,
)
