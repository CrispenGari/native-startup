import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Route from "../routes";
import { useEffect } from "react";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions";
const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.location);
  useEffect(() => {
    (async () => {
      const { granted } = await Location.getForegroundPermissionsAsync();
      if (!granted) {
        await Location.requestForegroundPermissionsAsync();
      }
      const { granted: grantedPermission } =
        await Location.getForegroundPermissionsAsync();
      if (grantedPermission) {
        const location = await Location.getCurrentPositionAsync({});
        dispatch(actions.setLocation(location));
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    if (location) {
      (async () => {
        const { latitude: lat, longitude: long } = location?.coords;
        if (lat && long) {
          const reversed = await Location.reverseGeocodeAsync({
            latitude: Number(lat),
            longitude: Number(long),
          });
          dispatch(actions.setLocationName(reversed));
        }
      })();
    }
  }, [location, dispatch]);

  return (
    <View style={{ flex: 1, paddingTop: 25 }}>
      <StatusBar style="auto" />
      <Route />
    </View>
  );
};
export default Layout;
const styles = StyleSheet.create({});
