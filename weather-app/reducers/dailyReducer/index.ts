import constants from "../../utils";

interface ActionType {
  payload: any;
  type: string;
}
const dailyReducer = (state = null, action: ActionType) => {
  switch (action.type) {
    case constants.SET_DAILY:
      return (state = action.payload);
    default:
      return state;
  }
};

export default dailyReducer;
