import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import axios from "axios";
import Story from "../Story";

interface Props {
  theme: string;
}
const Stories: React.FC<Props> = ({ theme }) => {
  const [stories, setStories] = React.useState([
    {
      picture:
        "https://lh3.googleusercontent.com/ogw/ADea4I73NTzjSSulhiYiJ3z4tYOXFCtHnXcHtbyU_CFC=s32-c-mo",
      name: "crispen",
      id: "gahkaluhslslsjka71901",
    },
  ]);

  React.useEffect(() => {
    const _url = "https://randomuser.me/api/?results=1000";
    axios.get(_url).then(({ data }) => {
      setStories((prev) => [
        ...prev,
        ...data?.results?.map((result: any) => ({
          picture: result?.picture?.large,
          name: result?.name?.first,
          id: result?.login?.uuid,
        })),
      ]);
    });
  }, []);
  return (
    <FlatList
      data={stories}
      keyExtractor={(item: any) => item?.id}
      style={{
        width: "100%",
        padding: 5,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.5,
        backgroundColor: theme,
      }}
      renderItem={Story}
      disableVirtualization
      horizontal
      decelerationRate="fast"
      snapToInterval={100}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({});
