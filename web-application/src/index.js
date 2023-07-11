import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.css";
import App from "./app";

import { Provider } from "react-redux";
import store from "./redux/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
