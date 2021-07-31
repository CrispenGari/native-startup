import React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import actions from "../../actions";
import { Ionicons } from "@expo/vector-icons";
const ChatScreen: React.FC<any> = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Chats");
            dispatch(actions.setHeader(true));
          }}
          style={{
            marginLeft: 10,
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
    dispatch(actions.setHeader(false));
  }, [dispatch]);
  return (
    <View>
      <Text>{JSON.stringify(route?.params, null, 2)}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
