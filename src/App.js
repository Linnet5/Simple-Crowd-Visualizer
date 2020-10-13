import React from 'react';
import {useState} from "react";
import logo from './logo.svg';
import './App.css';

function RenderElement(amount) {
  let crowd = new Array();
  for(let i = 0; i < amount; i++) {
    crowd.push(<img class ="crowd-element" src= "https://www.flaticon.com/svg/static/icons/svg/57/57117.svg"></img>);
  }
return (crowd);
}


function App() {
  const[crowdL, setCrowdL] = useState(0);
  const[crowdR, setCrowdR] = useState(0);
  
  function changeInputL(event) {
      setCrowdL(parseInt(event.target.value));
  }

  function changeInputR(event) {
    setCrowdR(parseInt(event.target.value));
  }

  return (
    <div>
      <h1 class = "title">Simple Crowd Visualizer</h1>
        <div class = "container">
          <div class = "child">
           <h2>Crowd 1:</h2>
            <input type="text" placeholder = "Crowd amount... Warning! Entering high values (approx value>25000) will slow down your browser significantly." onChange = {changeInputL}/>
            <div class = "elements">
              {
                RenderElement(crowdL)
              }
            </div>
          </div>
          <div class = "child">
            <h2>Crowd 2:</h2>
            <input type="text" placeholder = "Crowd amount... Warning! Entering high values (approx value>25000) will slow down your browser significantly." onChange = {changeInputR}/>
            <div class = "elements">
              {
                RenderElement(crowdR)
              }
            </div>
          </div>
        </div>
        <div class = "text">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
  );
}

export default App;
