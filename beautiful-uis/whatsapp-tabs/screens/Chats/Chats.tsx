import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { COLORS } from "../../assets/colors";
import Button from "../../components/Button/Button";
import { MaterialIcons } from "@expo/vector-icons";
import actions from "../../actions";
import { useDispatch } from "react-redux";

const Chats: React.FC<any> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    if (route.name == "Chats") {
      dispatch(actions.setHeader(true));
    }
  }, [dispatch]);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Button
        bottom={30}
        backgroundColor={COLORS.ICON_CONTAINER_COLOR}
        Icon={
          <MaterialIcons
            name="chat"
            size={25}
            color="white"
            style={{
              transform: [{ rotate: "360deg" }],
            }}
          />
        }
        containerStyles={{
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            borderColor: "lightgray",
            borderWidth: 1,
            paddingVertical: 20,
          }}
          onPress={() => {
            dispatch(actions.setHeader(true));
            navigation.navigate("Chat", {
              message: "Hello this is our custom chat.",
              developer: "Gari",
              chatId: 27,
            });
          }}
        >
          <Text>Open Sample Chat</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
