import React, { useState } from 'react';
import styled from 'styled-components'
import Button from './Button1'

import logo from './logo.svg';
import './App.css';



function CounterApp (){
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <p>Counter: {count}</p>
      <Button onClick={()=>setCount(count-1)} inputColor="red" >-</Button>
      <Button onClick={()=>setCount(count+1)} inputColor="green" >-</Button>
      </header>
    </div>
  );
}

export default CounterApp;