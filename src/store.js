// import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: 0,
//   reducers: {
//     increment: (state) => state + 1,
//     decrement: (state) => state - 1,
//   },
// });

// export const store = configureStore({
//   reducer: counterSlice.reducer,
// });

import { createStore } from "redux";
import counterReducer from "./reducers";

const Counter = createStore(counterReducer);

export default Counter;
