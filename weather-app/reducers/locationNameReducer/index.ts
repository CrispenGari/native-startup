import constants from "../../utils";
import { ActionType } from "../../types";
const locationNameReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_REVERSED_GEOCODE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default locationNameReducer;
