import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import Axios from "../../axios";
import API_KEY from "../../keys/keys";
const Temperature: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.location);
  useEffect(() => {
    if (location) {
      const { latitude: lat, longitude: lon } = location.coords;
      const url = `weather?lat=${lat}&lon=${lon}&units=metrics&appid=${API_KEY}`;
      (async () => {
        const { data } = await Axios({
          method: "GET",
          url: url,
        });
        dispatch(actions.setTemperature(data));
      })();
    }
  }, [location]);
  return <Drawer routeName={props.route?.name} />;
};

export default Temperature;

const styles = StyleSheet.create({});
