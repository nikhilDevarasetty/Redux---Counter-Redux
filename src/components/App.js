// import React, { useState } from "react";
// import Counter from "../store";
// import { increment, decrement } from "../actions/action";

// function App() {
//   const [state, setCounter] = useState({ counter: 0 });
//   const incre = () => {
//     Counter.dispatch(increment());
//   };
//   const decre = () => {
//     Counter.dispatch(decrement());
//   };

//   Counter.subscribe(() => setCounter(Counter.getState()));

//   return (
//     <div id="main">
//       <div data-testid="counter">{state.counter}</div>
//       <button onClick={incre}>+</button>
//       <button onClick={decre}>-</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../actions/action";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };

  return (
    <div id="main">
      <h3 data-testid="counter">Count: {store.counter}</h3>
      <button onClick={inc}>+</button>
      <br />
      <br />
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
