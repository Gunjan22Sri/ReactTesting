import React from 'react';
//var React = require('react')
import ReactDOM from 'react-dom/client';
import Test1 from './myfile';
//var ReactDOM = require('react-dom');

import Favourite from './Components/Book';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  //<h1>Hello</h1>
  <Favourite />);

function TestConponent() {
  return (
    <div>
      <h1>Hello Component</h1>
      <h2>welcome to react</h2>
    </div>
  )
}