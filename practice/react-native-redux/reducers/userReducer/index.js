import constants from "../../utils";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case constants.SET_USER:
      return (state = action.payload);
    default:
      return state;
  }
};

export default userReducer;
