import logo from './logo.svg';
import './App.css';
import { UserContext } from './index';
import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = {
  count: 0
  }

  function reducer(state, action) {
    switch(action.type) {
      case "increment":
        return {count : state.count + 1}
      case "decrement":
        return {count : state.count - 1}
      case "reset":
        return initialState
      default:
      return initialState
    }
}
  
  function App(props) {
        console.log('first');
    const [state, dispatch] = useReducer(reducer, initialState);
        console.log('dispatcher', dispatch);
    return (
      <div>
        Count: {state.count}
        <br />
        <Button onClick={() => dispatch({type: 'increment'})}>
          Increment
        </Button>
        <Button variant="secondary" onClick={() => dispatch({type: 'decrement'})}>
          Decrement
        </Button>
        <Button variant="success" onClick={() => dispatch({type: 'reset'})}>
          Reset
        </Button>
        {/* {props.username} */}
        <UserContext.Consumer>
          {value => <div>Received, {value}</div>}
        </UserContext.Consumer>
      </div>
    );
}

export default App;
