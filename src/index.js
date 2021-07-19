import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(  
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <App />
      </div>      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
