import { combineReducers } from "redux";
import currentReducer from "./currentReducer/currentReducer";
import searchedReducer from "./searchedReducer";
import locationNameReducer from "./locationNameReducer";
import locationReducer from "./locationReducer";

const rootReducers = combineReducers({
  searched: searchedReducer,
  location: locationReducer,
  locationName: locationNameReducer,
  current: currentReducer,
});

export default rootReducers;
