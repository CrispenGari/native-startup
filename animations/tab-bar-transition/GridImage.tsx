import React from "react";
import { View, Image } from "react-native";

const GridImage: React.FC<{
  image: string;
  width: number;
}> = ({ image, width }) => {
  return (
    <View
      style={{
        width: width,
        height: width,
        margin: 10,
        flex: 1,
        minWidth: width,
        minHeight: width,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
        }}
      />
    </View>
  );
};

export default GridImage;
