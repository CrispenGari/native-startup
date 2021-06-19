import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { Button, Input, Text, Image } from "react-native-elements";
import { auth, db } from "../../firebase";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const register = () => {
    console.log(username, email, password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
          photoURL: null,
        });
        navigation.replace("Home");
        setEmail("");
        setPassword("");
        setUsername("");
      })
      .catch((error) => {
        setPassword("");
        alert(error.message);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigator]);
  return (
    <View style={styles.register}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Image
          source={{
            uri: "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/messages_5122x.png",
          }}
          style={{ width: 100, height: 100, marginBottom: 10 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text h4 style={{ marginBottom: 20 }}>
          Create an Account
        </Text>
        <Input
          placeholder="Username"
          autoFocus
          style={{ color: "white" }}
          inputContainerStyle={styles.register__input}
          leftIcon={{
            type: "material",
            name: "person",
            color: "gray",
            style: {
              color: "gray",
            },
          }}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="Email"
          style={{ color: "white" }}
          inputContainerStyle={styles.register__input}
          leftIcon={{
            type: "material",
            name: "email",
            color: "gray",
            style: {
              color: "gray",
            },
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          style={{ color: "white" }}
          inputContainerStyle={styles.register__input}
          secureTextEntry
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "gray",
            style: {
              color: "gray",
            },
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={register}
        />
        <Button
          title="Register"
          buttonStyle={styles.register__form__btn}
          type="outline"
          onPress={register}
        />
      </KeyboardAvoidingView>
      <View style={{ height: 100 }} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  register: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  register__input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 0,
    maxHeight: 40,
    backgroundColor: "black",
    marginBottom: -15,
  },
  register__form__btn: {
    width: 300,
    marginTop: 0,
    marginBottom: 5,
  },
});
