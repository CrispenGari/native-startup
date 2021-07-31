import { combineReducers } from "redux";
import showHeader from "./headerReducer/headerReducer";

const rootReducers = combineReducers({
  showHeader,
});
export default rootReducers;
