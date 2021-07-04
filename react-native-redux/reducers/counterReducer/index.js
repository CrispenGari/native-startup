import constants from "../../utils";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_COUNTER:
      return (state = state + action.payload);
    default:
      return state;
  }
};
export default counterReducer;
