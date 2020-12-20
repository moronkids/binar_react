import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Provider/AuthProvider'
import { BrowserRouter } from 'react-router-dom'
import OverlayProvider from "./Provider/OverlayProvider"
import store from "./redux/store" // store ini berisi semua varibel state global
import { Provider } from "react-redux"
ReactDOM.render(
  <BrowserRouter>
  <OverlayProvider>
    <AuthProvider>
      <Provider store={store}>
      <App/>
      </Provider>
    </AuthProvider>
  </OverlayProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
