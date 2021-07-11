import { combineReducers } from "redux";
import dailyReducer from "./dailyReducer";
import locationNameReducer from "./locationNameReducer";
import locationReducer from "./locationReducer";

const rootReducers = combineReducers({
  daily: dailyReducer,
  location: locationReducer,
  locationName: locationNameReducer,
});

export default rootReducers;
