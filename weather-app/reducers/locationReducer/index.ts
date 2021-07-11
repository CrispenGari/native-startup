import { ActionType } from "../../types";
import constants from "../../utils";
const locationReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_LOCATION:
      return (state = action.payload);
    default:
      return state;
  }
};

export default locationReducer;
