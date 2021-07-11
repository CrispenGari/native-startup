import { combineReducers } from "redux";
import dailyReducer from "./dailyReducer";

const rootReducers = combineReducers({
  daily: dailyReducer,
});

export default rootReducers;
