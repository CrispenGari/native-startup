import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducers;
