### Bottom Sheet

In this one we are going to learn how we can create a customizable bottomsheet using the [bottom-sheet](https://ui.gorhom.dev/components/bottom-sheet/) package. First you need to install it as follows:

```shell
npm i @gorhom/bottom-sheet@^4
```

Then

```shell
npx expo install react-native-reanimated react-native-gesture-handler
```

Then we change the `babel.config.js` to:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
```

### Basic bottom sheet and methods.

In the following example we are going to create a basic bottomsheet.

```tsx
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ["25%", "50%", "75%"], []);
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={1}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={{ flex: 1, alignItems: "center" }}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
```

THis will create a bottomsheet, which will be opened by default at `50%` because of index that was set to 1. Setting the `enablePanDownToClose` prop will enable you to drag down the bottom sheet to close. The following are the bottomsheet methods that we can use on this bottomsheet.

```tsx
// ...
const bottomSheetRef = React.useRef<BottomSheet>(null);
const snapPoints = React.useMemo(() => ["25%", "50%", "75%"], []);

const close = () => bottomSheetRef.current?.close(); // closes the bottomsheet
const expand = () => bottomSheetRef.current?.expand(); // expand/open the bottom sheet
const colapse = () => bottomSheetRef.current?.collapse(); // closes to the smallest snap point
const snap = () => bottomSheetRef.current?.snapToIndex(1); // open the bottomsheet to the specified snap index
```

You can style the handle or create a custom handle using the `handleIndicatorStyle` and `handleComponent` respectively:

```tsx
<BottomSheet
  ref={bottomSheetRef}
  snapPoints={snapPoints}
  index={1}
  enablePanDownToClose={true}
  handleIndicatorStyle={{ display: "none" }}
  handleComponent={() => <Text>Open</Text>}
>
  <BottomSheetView style={{ flex: 1, alignItems: "center" }}>
    <Text>Awesome 🎉</Text>
  </BottomSheetView>
</BottomSheet>
```

#### Rendering a Backdrop

The following code shows the bottom sheet with the backdrop

```tsx
export default function App() {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ["25%", "50%", "75%"], []);

  .....
  const renderBackDrop = React.useCallback(
    (props: BottomSheetBackgroundProps) => {
      return (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      );
    },
    []
  );

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Close" onPress={close} />
      <Button title="Colaspe" onPress={colapse} />
      <Button title="Open" onPress={expand} />
      <Button title="Snap to point 1" onPress={snap} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={1}
        enablePanDownToClose={true}
        backdropComponent={renderBackDrop}
      >
        <BottomSheetView
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
```

#### Bottomsheet Components

In the bottomsheet you can use the components inside the bottomsheed to get high perfoming UI. These components are:

1. View
2. ScrollView
3. TextInput
4. Footer
5. FlatList
6. etc. https://ui.gorhom.dev/components/bottom-sheet/components/bottomsheetbackdrop

### Custom BottomSheet

In this section we are going to create a CustomBottomSheet Component.

```tsx
const CustomBottomSheet = React.forwardRef<BottomSheet, { title: string }>(
  ({ title }, ref) => {
    const snapPoints = React.useMemo(() => ["25%", "50%", "75%"], []);
    const renderBackDrop = React.useCallback(
      (props: BottomSheetBackgroundProps) => {
        return (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props}
          />
        );
      },
      []
    );
    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={1}
        enablePanDownToClose={true}
        backdropComponent={renderBackDrop}
      >
        <BottomSheetView
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <Text>{title} 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);
```

WE will need to use `forwardRef` so that we can pass the reference of the bottomsheet as props. Now to use our custom bottomshedt we are going to go to the `App` component and add the following.

```tsx
export default function App() {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const close = () => bottomSheetRef.current?.close(); // closes the bottomsheet
  const expand = () => bottomSheetRef.current?.expand(); // expand/open the bottom sheet
  const colapse = () => bottomSheetRef.current?.collapse(); // closes to the smallest snap point
  const snap = () => bottomSheetRef.current?.snapToIndex(1); // open the bottomsheet to the specified snap index

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Close" onPress={close} />
      <Button title="Colaspe" onPress={colapse} />
      <Button title="Open" onPress={expand} />
      <Button title="Snap to point 1" onPress={snap} />

      <CustomBottomSheet title="Awesome!!" ref={bottomSheetRef} />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
```

### Bottomsheet Modal

In this section we are going to create a bottomsheet that will be above our application. This is very usefull when you want a bottomsheet to be above tab-bars and anything else in the app: https://ui.gorhom.dev/components/bottom-sheet/modal. First we need to wrap our app withing a `BottomSheetModalProvider`

```tsx
export default function App() {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const close = () => bottomSheetRef.current?.dismiss(); // closes the bottomsheet
  const present = () => bottomSheetRef.current?.present(); // present/open the bottom sheet
  const colapse = () => bottomSheetRef.current?.collapse(); // closes to the smallest snap point
  const snap = () => bottomSheetRef.current?.snapToIndex(1); // open the bottomsheet to the specified snap index

  const snapPoints = React.useMemo(() => ["25%", "50%", "75%"], []);
  const renderBackDrop = React.useCallback(
    (props: BottomSheetBackgroundProps) => {
      return (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      );
    },
    []
  );

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BottomSheetModalProvider>
        <Button title="Close" onPress={close} />
        <Button title="Colaspe" onPress={colapse} />
        <Button title="Open" onPress={present} />
        <Button title="Snap to point 1" onPress={snap} />

        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={1}
          enablePanDownToClose={true}
          backdropComponent={renderBackDrop}
        >
          <BottomSheetView
            style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
          >
            <Text>Bottomsheet Modal 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
```

### Custom Bottomsheet Modal

Next we are going to create a custom bottomsheet modal.

```tsx
const CustomBottomSheetModal = React.forwardRef<
  BottomSheetModal,
  { title: string }
>(({ title }, ref) => {
  const snapPoints = React.useMemo(() => ["25%", "50%", "75%"], []);
  const { dismiss } = useBottomSheetModal();
  const renderBackDrop = React.useCallback(
    (props: BottomSheetBackgroundProps) => {
      return (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      );
    },
    []
  );
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose={true}
      backdropComponent={renderBackDrop}
    >
      <BottomSheetView
        style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
      >
        <Text>{title} Modal 🎉</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
});
```

> It is required that when you are using hooks you are required to be in the `BottomSheetModalContext`.

### Refs

1. [ui.gorhom.dev](https://ui.gorhom.dev/components/bottom-sheet/usage)
