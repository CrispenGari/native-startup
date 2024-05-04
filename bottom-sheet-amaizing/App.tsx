import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

        <CustomBottomSheetModal ref={bottomSheetRef} title="Hello" />
      </BottomSheetModalProvider>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

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
