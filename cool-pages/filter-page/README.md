### Filter Page

In this one we are going to walk through how we can create a cool filter page with react-native expo, reanimated and `react-native-bouncy-checkbox`.

```ts
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const langs = [
  {
    id: 1,
    name: "TypeScript",
    checked: false,
  },
  {
    id: 2,
    name: "JavaScript",
    checked: false,
  },
  { id: 3, name: "C++", checked: false },
];

const Page = () => {
  const [languages, setLanguages] = React.useState(langs);
  const [selected, setSelected] = React.useState<(typeof langs)[number][]>([]);

  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);
  const gap = useSharedValue(0);
  React.useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = languages.filter((l) => l.checked);
    const newSelected = selectedItems.length > 0;

    if (newSelected !== hasSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
      gap.value = withTiming(newSelected ? 16 : 0);
    }
    setSelected(selectedItems);
  }, [languages]);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
    };
  });
  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const gapStyle = useAnimatedStyle(() => {
    return {
      gap: gap.value,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 10, backgroundColor: "white" }}
        keyExtractor={({ id }) => id.toString()}
        data={languages}
        renderItem={({ index, item }) => (
          <TouchableOpacity
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text>{item.name}</Text>
            <BouncyCheckbox
              size={25}
              fillColor="red"
              unFillColor="#FFFFFF"
              iconStyle={{
                borderColor: "red",
                width: 25,
                height: 25,
                borderRadius: 2,
              }}
              innerIconStyle={{ borderWidth: 2, width: 25, height: 25 }}
              style={{ width: 20, height: 20 }}
              isChecked={languages[index].checked}
              onPress={() => {
                const isChecked = languages[index].checked;
                const updatedItems = languages.map((lang) => {
                  if (lang.id === languages[index].id) {
                    lang.checked = !isChecked;
                  }
                  return lang;
                });
                setLanguages(updatedItems);
              }}
            />
          </TouchableOpacity>
        )}
      />

      <Animated.View
        style={[
          gapStyle,
          {
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            padding: 20,
            height: 200,
          },
        ]}
      >
        <Animated.View
          style={[
            animatedWidth,
            {
              backgroundColor: "black",
              alignItems: "center",
              borderRadius: 5,
            },
          ]}
        >
          <TouchableOpacity
            style={{ padding: 16, height: 55 }}
            onPress={() => {
              setLanguages((state) =>
                state.map((i) => ({ ...i, checked: false }))
              );
            }}
          >
            <Animated.Text
              style={[
                animatedText,
                { color: "white", fontWeight: "800", fontSize: 20 },
              ]}
            >
              Clear all ({languages.filter((l) => l.checked).length})
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "red",
            padding: 16,
            alignItems: "center",
            borderRadius: 5,
            height: 55,
          }}
        >
          <Text style={{ color: "white", fontWeight: "800", fontSize: 20 }}>
            Apply
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Page;
```

### Refs

1. https://www.npmjs.com/package/react-native-bouncy-checkbox
