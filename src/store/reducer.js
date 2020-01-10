import { combineReducers } from "redux";
import errorReducer from "./error/reducer";
import authReducer from "./auth/reducer";
import treeReducer from "./trees/reducer";

export default combineReducers({
  auth: authReducer,
  trees: treeReducer,
  error: errorReducer
});
