import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  const uri = "https://crispen-gari.web.app/81836eff-d.jpeg";
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link
        asChild
        href={{
          pathname: "/[url]",
          params: {
            url: uri,
          },
        }}
      >
        <TouchableOpacity>
          <Image source={{ uri }} style={{ width: 200, height: 200 }} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;
