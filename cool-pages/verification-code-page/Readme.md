### verification code page

In this readme we are going to create a verification code page using the [react-native-confirmation-code-field](https://www.npmjs.com/package/react-native-confirmation-code-field) package. First we need to install it as follows:

```shell
yarn add react-native-confirmation-code-field
```

### Code

```ts
import { View, Text } from "react-native";
import React from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const CELL_COUNT = 6;
const Code = () => {
  const [code, setCode] = React.useState("");
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "800", marginTop: 30 }}>
        6-digit code
      </Text>
      <Text style={{ color: "gray" }}>
        Code sent to 123456789 unless you already have an account
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={{
          marginVertical: 20,
          marginLeft: "auto",
          marginRight: "auto",
          gap: 12,
        }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <React.Fragment key={index}>
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[
                {
                  width: 45,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#758694",
                  borderRadius: 8,
                },
                isFocused && { paddingBottom: 8 },
              ]}
            >
              <Text
                style={{ color: "#000", fontSize: 36, textAlign: "center" }}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
            {index === 2 ? (
              <View
                key={`separator-${index}`}
                style={{
                  height: 2,
                  width: 10,
                  backgroundColor: "gray",
                  alignSelf: "center",
                }}
              />
            ) : null}
          </React.Fragment>
        )}
      />
    </View>
  );
};

export default Code;
```
