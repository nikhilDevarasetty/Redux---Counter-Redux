import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../actions/action";

function App() {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };

  return (
    <div id="main">
      <div data-testid="counter">{counter}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
