import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Router from "./Router";


function App() {

  // Each event (e) has an element that triggered the event (target) and some value stored at the target (value)
  return (
    <div className="App">
      <Router/>
    </div>
  );
  
}





export default App;
