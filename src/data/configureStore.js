import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { createRootReducer } from "@data/rootReducer";

const rootReducer = createRootReducer();

export default function configureStore() {
  const store = createStore(
    rootReducer,
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
