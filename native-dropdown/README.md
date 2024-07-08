### Native Dropdown Menu

In this one we are going to show the native dropdown menu from [zeego.dev](https://zeego.dev/components/dropdown-menu)

First we need to install the following packages.

```shell
yarn add zeego react-native-ios-context-menu react-native-ios-utilities @react-native-menu/menu
```

Since `zeego` uses native code we need to create a custom development client. First you need to run the following command when using expo:

```shell
npx expo prebuild
```

You will notice the `android` and `ios` folder in your project. Then you will need to run the following command to run on android:

```shell
npx expo run:android
# ios
npx expo run:ios
```

### Code

```tsx
import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Root,
  Content,
  Trigger,
  ItemTitle,
  Item,
  ItemIcon,
  CheckboxItem,
  Arrow,
} from "zeego/dropdown-menu";

const Menu = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Root>
        <Trigger>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 80,
              backgroundColor: "#f5b5f5",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Text>More</Text>
            <Ionicons name="ellipsis-horizontal" size={20} />
          </TouchableOpacity>
        </Trigger>
        <Content>
          <Item key="fernando rojo" onSelect={() => console.log("hey")}>
            <ItemTitle>Fernando Rojo</ItemTitle>
          </Item>
          <Item key="hello">
            <ItemTitle>Fernando Hello</ItemTitle>
            <Arrow />
          </Item>
        </Content>
      </Root>
    </View>
  );
};

export default Menu;
```
