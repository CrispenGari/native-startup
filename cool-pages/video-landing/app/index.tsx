import { View, Text } from "react-native";
import React from "react";
import WidgetList from "@/components/SortableList/WidgetList";

const index = () => {
  return (
    <View style={{ flex: 1, paddingTop: 100 }}>
      <Text style={{}}>Widgets</Text>
      <WidgetList />
    </View>
  );
};

export default index;
