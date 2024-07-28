import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './App.css'
import './output.css'

import { Provider } from 'react-redux'

import Store from './store/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
