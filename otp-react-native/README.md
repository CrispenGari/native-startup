### Handling OTPs in React Native

In this example we will show an example on how we can handle OTP and automatic verifications in `react-native`. First we need to install the following packages:

```shell
yarn add react-native-otp-verify @twotalltotems/react-native-otp-input
```

Code:

```ts
import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
export default function App() {
  const [otp, setOtp] = React.useState("");
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text
        style={{
          marginBottom: 15,
          fontWeight: "800",
        }}
      >
        Enter OTP
      </Text>
      <OTPInputView
        style={{ width: "80%", height: 200 }}
        pinCount={6}
        code={otp}
        onCodeChanged={(code) => setOtp(code)}
        autoFocusOnLoad
        codeInputFieldStyle={{
          width: 30,
          height: 45,
          borderWidth: 0,
          borderBottomWidth: 1,
          color: "black",
        }}
        codeInputHighlightStyle={{ borderColor: "#03DAC6" }}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <Button onPress={() => {}} title="Auto fill" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

### Refs

1. [react-native-otp-input](https://github.com/tttstudios/react-native-otp-input)
2. [react-native-otp-verify](https://www.npmjs.com/package/react-native-otp-verify)
