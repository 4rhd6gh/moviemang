import { combineReducers } from "redux";
import user from "./user/reducers";
import movie from "./movie/reducers";
import search from "./search/reducers";

const createRootReducer = () =>
  combineReducers({
    user,
    movie,
    search,
  });

export { createRootReducer };
