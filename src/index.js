import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "@data/configureStore";
import ErrorComponent from "@page/common/error/ErrorComponent";
import Spinner from "@page/common/spinner";
const { store } = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Spinner />
        <ErrorComponent />
        <App />
      </Provider>
    </BrowserRouter>
  </>
);
