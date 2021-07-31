import constants from "../constants";
const setHeader = (payload: boolean) => {
  return {
    payload,
    type: constants.SET_HEADER,
  };
};

const actions = {
  setHeader,
};
export default actions;
