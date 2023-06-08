import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));  //define root (entry point) object
root.render(   //This render() method tells React which React component should be injected into that root entry point. In most React apps, this is a component called App.
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>  {/* it's the root component of the React app. It's the main component that is rendered to the DOM */} 
  </React.StrictMode>
);

reportWebVitals();
