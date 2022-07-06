import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import persistReducer from "@data/rootReducer";

export default function configureStore() {
  const store = createStore(
    persistReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );

  return {
    store,
  };
}
