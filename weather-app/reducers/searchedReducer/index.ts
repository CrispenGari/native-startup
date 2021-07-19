import { ActionType } from "../../types";
import constants from "../../utils";

const searchedReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_SEARCH:
      return (state = action.payload);
    default:
      return state;
  }
};
export default searchedReducer;
