import React, { useState } from "react";
// import { store, counterSlice } from "../store";
import store from "../store";
import actions from "../actions/action";

function App() {
  const [counter, setCounter] = useState({ value: 0 });
  const incre = () => {
    store.dispatch({ type: "counter/incremented" });
  };
  const decre = () => {
    store.dispatch({ type: "counter/decremented" });
  };

  store.subscribe(() => setCounter(store.getState()));

  return (
    <div id="main">
      <div data-testid="counter">{counter.value}</div>
      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
    </div>
  );
}

export default App;
