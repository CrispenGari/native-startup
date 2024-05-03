import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarActiveTintColor: "green",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="home" color={color} size={size} />;
          },
          tabBarLabel: "Home",
          headerTitle: "Feed",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="person" color={color} size={size} />;
          },
          tabBarLabel: "Me",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="settings" color={color} size={size} />;
          },
          tabBarLabel: "Configurations",
        }}
      />
    </Tabs>
  );
}
