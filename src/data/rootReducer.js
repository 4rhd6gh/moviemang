import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./user/reducers";
import movie from "./movie/reducers";
import search from "./search/reducers";
import common from "./common/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export const rootReducer = combineReducers({
  user,
  movie,
  search,
  common,
});
export default persistReducer(persistConfig, rootReducer);
