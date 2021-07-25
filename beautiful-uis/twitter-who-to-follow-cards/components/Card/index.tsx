import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableOpacityBase,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/colors";
interface Item {
  id: string;
  name: string;
  picture: string;
}
interface Props {
  index?: number;
  item: Item;
  separators?: any;
  color: string;
}
const Card: React.FC<Props> = ({ item, color }) => {
  return (
    <View
      style={{
        padding: 5,
        borderRadius: 10,
        position: "relative",
        width: 150,
        borderWidth: 0.5,
        borderColor: COLORS.TWITTER_GRAY_COLOR,
        alignItems: "center",
        marginRight: 5,
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 5,
          top: 5,
        }}
        activeOpacity={0.7}
      >
        <Ionicons name="close-outline" size={24} color="gray" />
      </TouchableOpacity>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginTop: 10,
        }}
        source={{
          uri: item?.picture,
        }}
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: color,
          }}
        >
          {item?.name}
        </Text>
        <Text
          style={{
            color: "gray",
          }}
        >
          @{item?.name?.toLocaleLowerCase()}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 100,
          borderColor: COLORS.TWITTER_MAIN_COLOR,
          flexDirection: "row",
          justifyContent: "center",
          borderWidth: 1,
          marginBottom: 5,
          borderRadius: 999,
          padding: 5,
          marginTop: 10,
        }}
        activeOpacity={0.7}
      >
        <Text
          style={{
            color: COLORS.TWITTER_MAIN_COLOR,
            fontSize: 16,
          }}
        >
          Follow
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 10,
        }}
      >
        <Ionicons
          name="ios-person"
          size={15}
          color={COLORS.TWITTER_GRAY_COLOR}
        />
        <Text
          style={{
            color: "gray",
            marginLeft: 5,
          }}
        >
          Followed by someone and 3 others
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
