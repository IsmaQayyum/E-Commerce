import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from'react-helmet-async'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}><HelmetProvider>
<BrowserRouter>  <React.StrictMode>
    <App />
  </React.StrictMode>,</BrowserRouter>
</HelmetProvider>
</Provider>
)
