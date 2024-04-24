import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";
import data from "./assets/recipes.json";

export default function App() {
  const items = useMemo<Recipe[]>(() => data as any, []);
  const [category, setCategory] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header setCategory={setCategory} />
      <Listings items={items} category={category} />
    </View>
  );
}

const Header = ({
  setCategory,
}: {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [active, setActive] = React.useState(1);
  const scrollRef = React.useRef<ScrollView>(null);
  const itemsRef = React.useRef<Array<null | TouchableOpacity>>([]);

  const selectTab = (index: number) => {
    setCategory(index);
    const selected = itemsRef.current[index];
    if (selected) {
      setActive(index);

      selected.measureLayout(
        scrollRef.current as any,
        (x, _y) => {
          scrollRef.current?.scrollTo({ x, y: 0, animated: true });
        },
        () => {}
      );
    }
  };
  return (
    <View
      style={{
        paddingTop: 30,
        paddingHorizontal: 10,
        height: 130,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 30 }}>
        Recipes
      </Text>
      <ScrollView
        contentContainerStyle={{ gap: 10, alignItems: "center" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        {Array(10)
          .fill(9)
          .map((_, index) => {
            return (
              <TouchableOpacity
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                onPress={() => selectTab(index)}
                style={{
                  width: 60,
                  height: 50,
                  padding: 5,
                  borderRadius: 5,
                  borderBottomWidth: active === index ? 3 : 0,
                  backgroundColor: active === index ? "#f5f5f5" : "white",
                  alignItems: "center",
                }}
              >
                <Ionicons name="fast-food" size={24} />
                <Text>Order</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

const Listings = ({
  items,
  category,
}: {
  items: Recipe[];
  category: number;
}) => {
  const [fetching, setFetching] = React.useState(false);

  React.useEffect(() => {
    setFetching(true);

    const id = setTimeout(() => setFetching(false), 200);

    return () => {
      clearTimeout(id);
    };
  }, [category]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={fetching ? [] : items}
        style={{ padding: 10 }}
        contentContainerStyle={{
          gap: 10,
          paddingTop: 20,
          paddingBottom: 100,
        }}
        renderItem={({ item }) => {
          return (
            <Animated.View
              style={{ gap: 4 }}
              exiting={FadeOutRight}
              entering={FadeInLeft}
            >
              <Image
                style={{ width: "100%", height: 300, borderRadius: 10 }}
                source={{ uri: item.image }}
              />
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text>- by {item.author}</Text>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export interface Nutrient {
  kcal: string;
  fat: string;
  saturates: string;
  carbs: string;
  sugars: string;
  fibre: string;
  protein: string;
  salt: string;
}

export interface Time {
  preparation: string;
  cooking: string;
}

export interface Recipe {
  id: string;
  url: string;
  image: string;
  name: string;
  description: string;
  author: string;
  rattings: number;
  ingredients: string[];
  steps: string[];
  nutrients: Nutrient;
  times: Time;
  serves: number;
  difficult: string;
  vote_count: number;
  subcategory: string;
  dish_type: string;
  maincategory: string;
}
