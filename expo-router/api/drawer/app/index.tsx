import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Page = () => {
  const navigation = useNavigation();

  const open = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={open}>Open Drawer</Text>
    </View>
  );
};

export default Page;
