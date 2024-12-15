import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopStore from './store/store.js'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={ShopStore}>
    <App />
  </Provider>,
)
