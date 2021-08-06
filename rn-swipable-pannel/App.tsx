import "react-native-gesture-handler";
import React from "react";
import {
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { SwipeablePanel } from "rn-swipeable-panel";
import background from "./assets/images";
import { Entypo } from "@expo/vector-icons";

import Map from "./components/Map";
const { width, height } = Dimensions.get("screen");

const App: React.FC<any> = () => {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  const openPanel = () => {
    setIsPanelActive(true);
  };
  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden />
      <FlingGestureHandler
        key="left"
        direction={Directions.UP}
        onHandlerStateChange={(event) => {
          if (event.nativeEvent.state === State.END) {
            openPanel();
          }
        }}
      >
        <View
          style={{
            flex: 1,
            width,
          }}
        >
          <Image
            source={background}
            style={[
              StyleSheet.absoluteFillObject,
              {
                resizeMode: "cover",
                width,
                height,
              },
            ]}
          />
          <SwipeablePanel
            fullWidth
            openLarge
            closeOnTouchOutside
            onClose={closePanel}
            isActive={isPanelActive}
            showCloseButton={false}
            noBar
            style={{
              borderRadius: 1,
              flex: 1,
              background: "green",
              height: height - 120,
              alignItems: "center",
              flexDirection: "row",
            }}
            barStyle={{
              backgroundColor: "red",
              borderRadius: 0,
            }}
            noBackgroundOpacity
          >
            <Map />
          </SwipeablePanel>
          <TouchableOpacity
            style={{
              bottom: 0,
              position: "absolute",
              width,
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, .7)",
            }}
            activeOpacity={0.7}
            onPress={openPanel}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
              }}
            >
              Swipe up to open maps
            </Text>
            <Entypo name="chevron-small-up" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </FlingGestureHandler>
    </View>
  );
};

export default App;
