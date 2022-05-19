import { combineReducers } from "redux";
import user from "./user/reducers";
import movie from "./movie/reducers";
import search from "./search/reducers";
import common from "./common/reducers";

const createRootReducer = () =>
  combineReducers({
    user,
    movie,
    search,
    common,
  });

export { createRootReducer };
