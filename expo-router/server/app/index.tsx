import {
  View,
  Text,
  SectionList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <>
      <Stack.Screen options={{ title: "Programming Languages" }} />
      <SectionList
        stickySectionHeadersEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        automaticallyAdjustContentInsets={true}
        style={{ marginTop: headerHeight }}
        keyExtractor={({ id }) => id}
        sections={[{ data: [{ id: "1" }] }]}
        renderSectionHeader={() => (
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingBottom: 8,

                borderBottomColor: "gray",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            >
              {[
                "C++",
                "TypeScript",
                "Python",
                "Java",
                "JavaScript",
                "C#",
                "Ruby",
                "Rust",
              ].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveIndex(index)}
                  style={
                    activeIndex === index
                      ? {
                          padding: 10,
                          paddingHorizontal: 14,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          borderRadius: 20,
                        }
                      : {
                          padding: 10,
                          paddingHorizontal: 14,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 20,
                        }
                  }
                >
                  <Text
                    style={
                      activeIndex === index
                        ? {
                            fontSize: 14,
                            color: "#000",
                          }
                        : {
                            fontSize: 14,
                            color: "gray",
                          }
                    }
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 16,
              }}
            >
              <Text>USD</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10, margin: 12 }}>
              <TouchableOpacity
                style={[
                  {
                    flexDirection: "row",
                    gap: 16,
                  },
                ]}
              >
                <Ionicons name="add" size={24} />
                <Text>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    flexDirection: "row",
                    gap: 16,
                  },
                ]}
              >
                <Ionicons name="arrow-back" size={24} />
                <Text>Test</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        renderItem={(item) => {
          return (
            <>
              <View style={[{ height: 400, width: "100%" }]}></View>
              <View style={[{ marginTop: 20, padding: 20 }]}>
                <Text>Overview</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  eligendi temporibus, odit maxime commodi accusantium a fugit
                  cum nostrum quaerat odio possimus quasi harum voluptate enim
                  neque expedita nobis placeat.
                </Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

export default Page;
