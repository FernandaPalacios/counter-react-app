import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function CounterApp (){
  const [count, setCount] = useState(0);

  const incrementCount =()=>{
    setCount(count+1)

  }
  return (
    <div className="App">
      <header className="App-header">
      <p>Counter: {count}</p>
        <button style={{backgroundColor:"red", color: "white"}} onClick={()=>setCount(count-1)} >-</button>
        <button  style={{backgroundColor:"green", color: "white"}} onClick={incrementCount}>+</button>

      </header>
    </div>
  );
}

export default CounterApp;
