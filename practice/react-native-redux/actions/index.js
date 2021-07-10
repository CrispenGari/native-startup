import constants from "../utils";

const setCounter = (payload) => {
  return {
    type: constants.SET_COUNTER,
    payload,
  };
};
const setUser = (payload) => {
  return {
    type: constants.SET_USER,
    payload,
  };
};

const actions = {
  setCounter,
  setUser,
};
export default actions;
