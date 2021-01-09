import React, { useState } from "react";
// import { store, counterSlice } from "../store";
import Counter from "../store";
import { increment, decrement } from "../actions/action";

function App() {
  const [state, setCounter] = useState({ counter: 0 });
  const incre = () => {
    Counter.dispatch(increment());
  };
  const decre = () => {
    Counter.dispatch(decrement());
  };

  Counter.subscribe(() => setCounter(Counter.getState()));

  return (
    <div id="main">
      <div data-testid="counter">{state.counter}</div>
      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
    </div>
  );
}

export default App;
