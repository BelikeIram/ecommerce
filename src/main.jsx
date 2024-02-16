import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';  
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Provider} from "react-redux"
import {store} from './store/index'
import ModalComp from './components/shop-model/ModelComp'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
   <App  />
  </Provider>
  </React.StrictMode>,
)

