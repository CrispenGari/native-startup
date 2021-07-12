import { combineReducers } from "redux";
import currentReducer from "./currentReducer/currentReducer";
import dailyReducer from "./dailyReducer";
import locationNameReducer from "./locationNameReducer";
import locationReducer from "./locationReducer";

const rootReducers = combineReducers({
  daily: dailyReducer,
  location: locationReducer,
  locationName: locationNameReducer,
  current: currentReducer,
});

export default rootReducers;
