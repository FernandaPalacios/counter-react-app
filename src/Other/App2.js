import React from 'react'
import logo from './logo.svg';
import './App.css';


class CounterApp extends React.Component {

    constructor(props){
      super(props);
      this.state = {count : 0}
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
  
      
    }
  
    increment(){
      this.setState({count: this.state.count + 1});
    }
  
    decrement(){
      this.setState({count: this.state.count - 1});
    }
  
    render(){
    
      return (
      <div className="App">
        <header className="App-header">
        <p>Counter: {this.state.count}</p>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
  
        </header>
      </div>
    );
    }
  }
  
  export default CounterApp;
  