import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
    <GoogleOAuthProvider clientId="396499209310-e9dkj697kobuqsnhsicgjkoj2ogt6n63.apps.googleusercontent.com">
      <BrowserRouter>
        <Provider store={store}>
          <Spinner />
          <ErrorComponent />
          <App />
        </Provider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </>
);
