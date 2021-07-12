import constants from "../../utils";
import { ActionType } from "../../types";

const currentReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_CURRENT:
      return (state = action.payload);
    default:
      return state;
  }
};

export default currentReducer;
