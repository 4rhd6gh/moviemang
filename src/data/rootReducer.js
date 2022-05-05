import { combineReducers } from "redux";
import user from "./user/reducers";
import movie from "./movie/reducers";

const createRootReducer = () =>
  combineReducers({
    user,
    movie,
  });

export { createRootReducer };
