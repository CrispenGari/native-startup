import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import Axios from "../../axios";
const Temperature: React.FC = () => {
  const location = useSelector((state: any) => state.location);
  const dispatch = useDispatch();
  const url = `weather?lat=-32.7749909&lon=26.8523897&units=metrics&appid=badb4f2677b77c93ba9db23cddf56302`;
  useEffect(() => {
    (async () => {
      const { data } = await Axios({
        method: "GET",
        url: url,
      });
      dispatch(actions.setTemperature(data));
    })();
  }, [url]);
  return <Drawer />;
};

export default Temperature;

const styles = StyleSheet.create({});
