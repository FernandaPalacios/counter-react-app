import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './Pres-Component-Counter'
import counter from './reducers-index'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const App = ()=>{
<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
}

store.subscribe(App)
export default App;
