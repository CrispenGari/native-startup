import constants from "../utils";

const setLocation = (payload: any) => {
  return {
    payload,
    type: constants.SET_LOCATION,
  };
};

const setLocationName = (payload: any) => {
  return {
    payload,
    type: constants.SET_REVERSED_GEOCODE,
  };
};
const actions = {
  setLocation,
  setLocationName,
};
export default actions;
