import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import Profile from "./components/Profile";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Buttons from "./components/Buttons";
import Avatar from "./components/Avatar";
import * as ImagePicker from "expo-image-picker";

const App = () => {
  const ref = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => [0, "40%"], []);
  const openSheet = () => ref.current?.expand();
  const closeSheet = () => ref.current?.close(); // collapse
  const [avatar, setAvatar] = React.useState<any>(null);
  const [suggestions, setSuggestions] = React.useState<any[]>([]);

  React.useEffect(() => {
    let mounted: boolean = true;
    (async () => {
      if (mounted) {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (granted) {
          return;
        }
      }
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (granted) {
        return;
      }
      if (status === "granted") {
        return;
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);
  React.useEffect(() => {
    closeSheet();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Profile openSheet={openSheet} avatar={avatar} />
      </SafeAreaView>

      <BottomSheet
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enableOverDrag
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        backdropComponent={(props) => (
          <View
            {...props}
            style={{
              backgroundColor: "white",
              borderRadius: 12,
            }}
          />
        )}
      >
        <Buttons
          setSuggestions={setSuggestions}
          setAvatar={setAvatar}
          closeSheet={closeSheet}
        />

        <Text
          style={{
            fontSize: 20,
            padding: 10,
          }}
        >
          Suggestions
        </Text>
        <BottomSheetFlatList
          data={suggestions}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
          }}
          renderItem={({ item }) => (
            <Avatar
              setSuggestions={setSuggestions}
              item={item}
              setAvatar={setAvatar}
            />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheet>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
});
