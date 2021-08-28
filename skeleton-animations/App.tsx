import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import axios from "axios";
import { PostI } from "./types";
import Post from "./components/Post/Post";
import PostSkeleton from "./Skeletons/PostSkeleton/PostSkeleton";
const App = () => {
  const [post, setPosts] = React.useState<PostI[]>([]);
  React.useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPosts(
        data?.map((res: any, index: number) => ({
          title: res.title,
          url: res.url,
          id: index + 1,
          thumbnailUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
        }))
      );
    }, 10000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "lightseagreen",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Posts
        </Text>
      </View>

      {post?.length === 0 ? (
        <FlatList
          data={Array(10).fill(null)}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            padding: 2,
            paddingVertical: 10,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PostSkeleton theme="dark" />;
          }}
        />
      ) : (
        <FlatList
          data={post}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            padding: 2,
            paddingVertical: 10,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return <Post data={item} />;
          }}
        />
      )}
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
