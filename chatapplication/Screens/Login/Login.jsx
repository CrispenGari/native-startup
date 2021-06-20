import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Input, Button, Image, Text } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";
const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const login = () => {
    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      alert(err);
      setPassword("");
    });
  };
  const navigateToRegister = () => {
    navigation.navigate("Register");
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);
  return (
    <SafeAreaView style={styles.login}>
      <StatusBar style="light" />

      <KeyboardAvoidingView behavior="padding" style={styles.login__form}>
        <Image
          source={{
            uri: "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/messages_5122x.png",
          }}
          style={{ width: 100, height: 100, marginBottom: 20 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text h4 style={{ marginBottom: 20 }}>
          Already have an Account?
        </Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoFocus
          inputStyle={styles.login__form__input}
          inputContainerStyle={{
            borderWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
            margin: 0,
            maxHeight: 40,
            backgroundColor: "black",
            marginBottom: -15,
          }}
          leftIcon={{
            type: "material",
            name: "email",
            color: "gray",
            style: {
              color: "gray",
            },
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          inputStyle={styles.login__form__input}
          inputContainerStyle={{
            borderWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
            margin: 0,
            maxHeight: 40,
            backgroundColor: "black",
            marginBottom: -15,
          }}
          leftIcon={{
            type: "font-awesome",
            name: "lock",
            color: "gray",
            style: {
              color: "gray",
            },
          }}
          onSubmitEditing={login}
        />
        <Button
          title="Login"
          onPress={login}
          buttonStyle={styles.login__form__btn}
        />
        <Button
          title="Register"
          buttonStyle={styles.login__form__btn}
          type="outline"
          onPress={navigateToRegister}
        />
      </KeyboardAvoidingView>
      <View style={{ marginBottom: 5 }} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login__form: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  login__form__btn: {
    width: 300,
    marginTop: 0,
    marginBottom: 5,
  },
  login__form__input: {
    margin: 0,
    // fontSize: 16,
    height: 10,
    color: "white",
  },
});
