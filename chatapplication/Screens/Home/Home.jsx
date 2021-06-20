import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { auth, db } from "../../firebase";
import { Text, Avatar } from "react-native-elements";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Group from "../../components/Group/Group";
const Home = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    db.collection("groups")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGroups(
          snapshot.docs.map((doc) => ({ id: doc?.id, data: doc?.data() }))
        );
      });
  }, []);
  const logout = () => {
    auth.signOut();
    navigation.replace("Login");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 70,
        backgroundColor: "#2c6bed",
      },
      headerRight: () => (
        <View
          style={{
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 70,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons name="camera-outline" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("NewChat")}
          >
            <MaterialIcons name="create" size={26} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <View
          style={{
            paddingLeft: 10,
          }}
        >
          <Avatar
            size="medium"
            rounded
            title={auth?.currentUser?.displayName[0].toLocaleUpperCase()}
            activeOpacity={0.4}
            containerStyle={{
              backgroundColor: "#fafafa",
            }}
            titleStyle={{ color: "black", fontSize: 18 }}
            onPress={logout}
          />
        </View>
      ),
      headerTitle: "Chats",
    });
  }, [navigation]);

  const navigateInChat = (chatName, id) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.home}>
        {groups.map((group, i) => (
          <Group key={i} group={group} navigateInChat={navigateInChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
