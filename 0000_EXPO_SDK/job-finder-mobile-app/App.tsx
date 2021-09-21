import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Screen } from "./Screens";
import { Header } from "./Components";
import { navigationLabels } from "./utils";
const Drawer = createDrawerNavigator();
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

const App = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerStyle={{
            opacity: 0.99,
          }}
          drawerContentOptions={{}}
        >
          {navigationLabels?.map((value, indx) => {
            return (
              <Drawer.Screen
                name={value?.name}
                key={value?.id}
                children={() => <Screen componentName={value?.name} />}
                options={{
                  title: value?.name,
                  drawerIcon: ({ focused, size }) => {
                    if (value.iconMother === "mci") {
                      return (
                        <MaterialCommunityIcons
                          name={value?.icon.toLocaleLowerCase()}
                          size={24}
                          color={value?.color || "black"}
                        />
                      );
                    } else if (value.iconMother === "ion") {
                      return (
                        <Ionicons
                          name={value?.icon.toLocaleLowerCase()}
                          size={24}
                          color={value?.color || "black"}
                        />
                      );
                    } else if (value?.iconMother === "ant") {
                      <AntDesign
                        name={value?.icon.toLocaleLowerCase()}
                        size={24}
                        color={value?.color || "black"}
                      />;
                    } else if (value.iconMother === "fontisto") {
                      return (
                        <Fontisto
                          name={value?.icon.toLocaleLowerCase()}
                          size={24}
                          color={value?.color || "black"}
                        />
                      );
                    } else if (value.iconMother === "ent") {
                      <Entypo
                        name={value?.icon.toLocaleLowerCase()}
                        size={24}
                        color={value?.color || "black"}
                      />;
                    } else {
                      return (
                        <FontAwesome5
                          name={value?.icon.toLocaleLowerCase()}
                          size={24}
                          color={value?.color || "black"}
                        />
                      );
                    }
                  },
                }}
              />
            );
          })}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
