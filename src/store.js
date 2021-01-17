import { createStore } from "redux";
import counterReducer from "./reducers";

const Counter = createStore(counterReducer);

export default Counter;
