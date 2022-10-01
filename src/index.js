import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/master.css';
import './assets/css/buttons-styles.css';
import './assets/css/cards-styles.css';
import './assets/css/checkbox-styles.css';
import './assets/css/dropdown-styles.css';
import './assets/css/fields-styles.css';
import './assets/css/hero-styles.css';
import './assets/css/home-jumbotron-styles.css';
import './assets/css/modal-styles.css';
import './assets/css/select-styles.css';
import './assets/css/sidebar-styles.css';
import './assets/css/skeleton-styles.css';
import './assets/css/table-styles.css';
import './assets/css/topbar-styles.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
