import React from 'react';
import ReactDOM from 'react-dom'
//import registerServiceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
console.log('test');
ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
//register()