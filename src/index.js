import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// 追加
import { Provider } from "react-redux";
import MemoStore from "./memo/Store";

// 表示をレンダリング
ReactDOM.render(
  <Provider store={MemoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
