import React, { useState } from 'react';
import styled from 'styled-components'


import logo from './logo.svg';
import './App.css';


const Button1 = styled.button`
 background-color:red;
 color:white
`;

const Button2 = styled.button`
 background-color:green;
 color:white
`;

function CounterApp (){
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <p>Counter: {count}</p>
      <Button1 onClick={()=>setCount(count-1)} >-</Button1>
      <Button2 onClick={()=>setCount(count+1)} >-</Button2>
      </header>
    </div>
  );
}

export default CounterApp;
