import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="profile"
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerType: "front",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "red",
          drawerInactiveTintColor: "white",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Home",
            drawerLabel: "Feed",
          }}
        />
        <Drawer.Screen name="profile" />
        <Drawer.Screen name="settings" />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "black", position: "relative" }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 30 + top,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 30,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            marginBottom: 30,
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{
              marginVertical: 30,
              width: 130,
              height: 130,
              borderRadius: 130,
            }}
          />
          <Text style={{ color: "white" }}>You are logged in</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label={"Sign Out"}
          onPress={() => router.replace("/")}
          labelStyle={{ color: "white" }}
        />
      </DrawerContentScrollView>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            bottom,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray" }}>
            This is my custom footer
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
