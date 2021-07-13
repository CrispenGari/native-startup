import constants from "../../utils";

import { ActionType } from "../../types";
const dailyReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_DAILY:
      return (state = action.payload);
    default:
      return state;
  }
};

export default dailyReducer;