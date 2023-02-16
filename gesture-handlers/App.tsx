import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DrawerLayout
        drawerWidth={200}
        // drawerPosition={DrawerLayout.positions.Left}
        drawerType="back"
        drawerBackgroundColor="#ddd"
        renderNavigationView={() => {
          return (
            <View>
              <Text>I am in the drawer!</Text>
            </View>
          );
        }}
        onDrawerSlide={(status) => console.log({ status })}
      >
        <View style={{ flex: 1 }}>
          <Text>This</Text>
        </View>
      </DrawerLayout>
    </View>
  );
};

export default App;
