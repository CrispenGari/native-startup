import React from "react";
import { View } from "react-native";
import Animations from "../Animations/Animations";
import Skeleton from "../Skeleton/Skeleton";
const PostSkeleton: React.FC<{
  theme: "dark" | "light";
}> = ({ theme }) => {
  return (
    <View
      style={{
        marginBottom: 5,
        backgroundColor: theme === "dark" ? "#444" : "#f5f5f5",
        padding: 5,
        borderRadius: 5,
        position: "relative",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton theme={theme} type="avatar" />
        <View
          style={{
            flex: 1,
          }}
        >
          <Skeleton theme={theme} type="header" />
          <Skeleton theme={theme} type="text" />
          <Skeleton theme={theme} type="text" />
          <Skeleton theme={theme} type="text__small" />
        </View>
        <Skeleton theme={theme} type="icon" />
      </View>
      <Skeleton theme={theme} type="post" />
      <Skeleton theme={theme} type="link" />
      <Animations theme={theme} />
    </View>
  );
};

export default PostSkeleton;
