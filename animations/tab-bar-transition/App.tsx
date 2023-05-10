import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import Tab from "./Tab";
import GridImage from "./GridImage";
import { Transition, Transitioning } from "react-native-reanimated";
const TAB_BAR_HEIGHT: number = 40;
const TAB_BAR_WIDTH: number = 150;
const { width } = Dimensions.get("window");
export default function App() {
  const ref = React.useRef<any>();
  const [state, setState] = React.useState({
    selectedTab: 0,
    images: [
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
      "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg",
      "http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg",
      "http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg",
      "http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg",
      "http://www.chatelaine.com/wp-content/uploads/2013/05/Curried-chicken-salad.jpg",
    ].map((uri, id) => ({ uri, id })),
  });

  const selectTab = (index: number) => {
    if (ref.current) {
      ref.current.animateNextTransition();
    }
    setState((state) => ({ ...state, selectedTab: index }));
  };
  const transition = (
    <Transition.Together>
      <Transition.In
        type="slide-right"
        durationMs={2000}
        interpolation="easeInOut"
      />
      <Transition.In type="fade" durationMs={2000} />
      <Transition.Change />
      <Transition.Out type="fade" durationMs={2000} />
    </Transition.Together>
  );

  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.animateNextTransition();
    }
  }, []);
  return (
    <Transitioning.View transition={transition} ref={ref} style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          height: TAB_BAR_HEIGHT,
          width: TAB_BAR_WIDTH,
          marginHorizontal: 15,
          backgroundColor: "lightblue",
          overflow: "hidden",
          borderRadius: 40,
          alignSelf: "center",
        }}
      >
        {state.selectedTab === 0 ? (
          <View
            style={[
              {
                position: "absolute",
                height: TAB_BAR_HEIGHT,
                width: TAB_BAR_WIDTH / 2,
                backgroundColor: "#BADA55",
                left: 0,
              },
            ]}
          />
        ) : (
          <View
            style={[
              {
                position: "absolute",
                height: TAB_BAR_HEIGHT,
                width: TAB_BAR_WIDTH / 2,
                backgroundColor: "#BADA55",
                right: 0,
              },
            ]}
          />
        )}
        <TouchableOpacity style={{ flex: 1 }} onPress={() => selectTab(0)}>
          <Tab
            icon="md-albums"
            isSelected={state.selectedTab == 0 ? true : false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => selectTab(1)}>
          <Tab
            icon="md-grid"
            isSelected={state.selectedTab == 1 ? true : false}
          />
        </TouchableOpacity>
      </View>

      {state.selectedTab == 0 ? (
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {state.images.map((image, index) => (
              <GridImage
                key={image.id}
                image={image.uri}
                width={width / 2 - 20}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {state.images.map((image, index) => (
            <GridImage
              key={image.id}
              image={image.uri}
              width={width / 4 - 20}
            />
          ))}
        </View>
      )}
      <View
        style={{
          marginBottom: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{state.selectedTab === 0 ? "Images" : "Grid images"}</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => {
          const images = state.images;
          images.pop();
          setState((state) => ({ ...state, images: images }));
        }}
      >
        <SafeAreaView
          style={{
            height: 70,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: state.selectedTab == 0 ? -70 : 0,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Delete Recipe</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          setState((state) => ({
            ...state,
            images: state.images.sort(() => Math.random() - 0.5),
          }));
        }}
      >
        <SafeAreaView
          style={{
            height: 70,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: state.selectedTab == 0 ? 0 : -70,
            backgroundColor: "#BADA55",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Randomize Recipe</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Transitioning.View>
  );
}
