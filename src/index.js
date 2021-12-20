import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Restraunt from './Components/Basic/Restraunt';
function Name(){
  return (
    <h1> hello all</h1>
   )
}
ReactDOM.render(
    <React.StrictMode>
     <Name/>
     <App />
     <Restraunt/> 
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
