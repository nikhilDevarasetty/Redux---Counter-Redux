import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Counter from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Counter}>
    <App />
  </Provider>,
  document.getElementById("root")
);
