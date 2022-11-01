### Native startup

This repository contains react native code.

### Basic and Useful React Native Components

In this section we are going to show basic and useful react native components and how to use them.

#### ScrollView

ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props.

Suppose we have list of elements that we want to render on the component, we can use `ScrollView` to allow the users to scroll the contents of the page.

```tsx
<ScrollView
  style={{ flex: 1, padding: 10 }}
  horizontal={false}
  showsHorizontalScrollIndicator={false}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={() => {
        // fetch data from the server
        console.log("refreshing");
      }}
    />
  }
>
  {items.map((item) => (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
      }}
      key={item.id}
    >
      <Text>{item.title}</Text>
    </View>
  ))}
</ScrollView>
```

#### FlatList

A performant interface for rendering basic, flat lists, supporting the most handy features: Fully cross-platform. Optional horizontal mode. Configurable viewability callbacks.

> Note that flatList except keys of rendered items as strings.

In the following example we are going to render list items from the previous example using a flatlist.

```tsx
<FlatList
  style={{
    flex: 1,
    padding: 10,
  }}
  data={items}
  keyExtractor={(item) => item.id.toString()}
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
  }
  renderItem={({ item: { id, title } }) => (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
      }}
    >
      <Text>{title}</Text>
    </View>
  )}
/>
```

#### SectionList

A `SectionList` is built on top of `FlatList`, it can be used to render nested data. Let's consider the following structure of data.

```ts
([
    {
      chapter: "Chapter 1",
      data: ["content 1", "content 2", "content 3", "content 4"],
    },
    {
      chapter: "Chapter 2",
      data: ["content 1", "content 2", "content 3", "content 4"],
    },
    {
      chapter: "Chapter 3",
      data: ["content 1", "content 2", "content 3", "content 4"],
    },
    {
      chapter: "Chapter 4",
      data: ["content 1", "content 2", "content 3", "content 4"],
    },
  ]
```

On the data like this we may want to use the `SectionList` to render contents on the page. _Note that each section object must have a `data` property._

#### Button

A button component is a regular component that is used to render a button in react native. It have a lot of events on it, as it is a self-closing tag A button component must have a `title` prop in it. Usage

```tsx
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  <Button
    title="My Button"
    onPress={() => {
      console.log("Pressed my button.");
    }}
  />
</View>
```

#### TouchableOpacity

Similar to a button but it takes in a children of type `React.ReactNode` which can be a component, such as `Text`, `Image`, `View` etc. It have an effect of changing the background opacity when clicked.

```tsx
<TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
  <Text style={{ padding: 10, fontSize: 20, color: "green" }}>Hello</Text>
</TouchableOpacity>
```

#### TouchableHighlight

Same as the touchable opacity except that this high ligths the background of the button when the `underlayColor` property is defined.

```tsx
<TouchableHighlight
  style={{
    backgroundColor: "blue",
  }}
  underlayColor="red"
  onPress={() => {}}
>
  <Text style={{ padding: 10, fontSize: 20, color: "green" }}>Hello</Text>
</TouchableHighlight>
```

> Now when the button is clicked the background will change to `red`

#### TouchableWithoutFeedback

Same as the touchable highlight only that this does not give the feedback on the UI when it is clicked.

```tsx
<TouchableWithoutFeedback onPress={() => {}}>
  <Text style={{ padding: 10, fontSize: 20, color: "green" }}>Hello</Text>
</TouchableWithoutFeedback>
```

#### Pressable

Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

```tsx
<Pressable
  onPress={() => {
    console.log(6);
  }}
>
  <Text style={{ padding: 10, fontSize: 20, color: "green" }}>Hello</Text>
</Pressable>
```

#### Alert

Launches an alert dialog with the specified title and message.

```tsx
const App = () => {
  const openAlert = () => {
    Alert.alert(
      "Title",
      "Do you want to keep this is state?",
      [
        { text: "OK", onPress: () => {}, style: "default" },
        { text: "Cancel", onPress: () => {}, style: "cancel" },
        {
          style: "default",
          text: "yes",
          onPress: () => console.log("yes"),
        },
      ],
      {
        cancelable: false,

        onDismiss: () => {
          console.log("Dismissed");
        },
      }
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={openAlert}>
        <Text style={{ padding: 10, fontSize: 20, color: "green" }}>Hello</Text>
      </Pressable>
    </View>
  );
};
export default App;
```

You can get the data from the user using the `Alert.prompt()`.

```ts
const openAlert = () => {
  Alert.prompt(
    "Notifications",
    "Do you want to allow notification from CakesDay? - crispengari",
    (text) => {
      console.log({ text });
    }
  );
};
```

#### Toast

#### Modals

In the following code we are going to show the basic usage of the `Modal` component in `React Native`.

```tsx
import React, { useState } from "react";
import { StyleSheet, Platform, View, Button, Modal } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text>Hello</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};
export default App;
```

#### Toast

React native offers a `ToastAndroid` that can be used to show toast messages. You can read more in the [docs](https://reactnative.dev/docs/toastandroid) for usage.

> For both operating system look for community packages like:

1. [react-native-root-toast](https://github.com/magicismight/react-native-root-toast)
2. [react-native-toast-message](https://www.npmjs.com/package/react-native-toast-message)

Alternatively you can show a `Toast` on `android` and `alert` on `ios`

```ts
import { ToastAndroid, Platform, AlertIOS } from "react-native";

function notifyMessage(msg: string) {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
}
```

#### Appearance

We can use the appearance API to get the current `appearance` of our device, we can use this API to get the theme of the app for example:

```ts
const theme = Appearance.getColorScheme();
console.log({ theme });
```

You can also listen to the appearance change of your phone by listening to the change in the appearance of your color scheme by calling the `addChangeListener` on the Apearance API.

```ts
React.useEffect(() => {
  Appearance.addChangeListener((listener) => listener.colorScheme);
  return () => {};
}, []);
```

#### AppState

This API helps us to track the app state. We can check when the app is active or not as follows:

```ts
React.useEffect(() => {
  const state = AppState.currentState;
  const iAvailable = AppState.isAvailable;
  console.log({ state, iAvailable });
  return () => {};
}, []);
```

We can also listen to different state in app state by adding a listener as follows:

```ts
AppState.addEventListener("focus", (state) => console.log(state));
AppState.addEventListener("change", (state) => console.log(state));
AppState.addEventListener("blur", (state) => console.log(state));
AppState.addEventListener("memoryWarning", (state) => console.log(state));
```

### Setting Up Amulator for React Native and Expo

In this section i will show how to set up the amulator step by step using `Antroid Studio` and react native on `Windows 10`.

1. First you need to download the [Android Studio HERE](https://developer.android.com/studio)
2. After downloading Android Studio you need to install it. The following pictures shows screenshots of step by step setting up an amulator starting from installing the android studio.

[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
[!alt]()
After setting the amulator and downloading it we need to set up the enviromental variables.

### Refs

- [Beautifull Google Fonts for Free Preview](https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html)
- [Keyboad-aware-scroll-view _(Advanced keyboard avoiding view with)_](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
- [React native animatable](https://github.com/oblador/react-native-animatable)
