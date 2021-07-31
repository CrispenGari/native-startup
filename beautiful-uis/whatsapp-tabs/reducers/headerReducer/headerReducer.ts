import constants from "../../constants";
interface Action {
  payload: boolean;
  type: string;
}
type ActionType = Action;
const headerReducer = (state = true, action: ActionType) => {
  switch (action.type) {
    case constants.SET_HEADER:
      return (state = action.payload);
    default:
      return state;
  }
};
export default headerReducer;
