import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { cardReducer } from "./reducer/index";

const store = createStore(cardReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
