import React, { useState } from "react";
import { store, counterSlice } from "../store";

function App() {
  const [counter, setCounter] = useState(0);
  const incre = () => {
    store.dispatch(counterSlice.actions.increment());
    setCounter(store.getState());
  };
  const decre = () => {
    store.dispatch(counterSlice.actions.decrement());
    setCounter(store.getState());
  };

  return (
    <div id="main">
      <div data-testid="counter">{counter}</div>
      <button onClick={incre}>increment</button>
      <button onClick={decre}>decrement</button>
    </div>
  );
}

export default App;
