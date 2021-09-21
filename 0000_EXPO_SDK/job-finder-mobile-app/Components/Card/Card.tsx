import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "./CardStyles";
const Card = ({ job }) => {
  const { url, how_to_apply } = job;
  const apply = async () => {
    const applicationLink = String(how_to_apply.split('"')[1]);
    await Linking.openURL(applicationLink).catch((error) => console.log(error));
  };
  const openSite = async () => {
    await Linking.openURL(url).catch((error) => {
      console.log(error);
    });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={openSite}>
      <View style={styles.card__company}>
        <Image
          style={styles.card__logo}
          source={{
            uri: job?.company_logo,
          }}
        />
        <View style={styles.card__company__info}>
          <Text style={styles.card__texth1}>{job?.company}</Text>
          <Text style={styles.card__texth2}>{job?.location}</Text>
        </View>
      </View>
      <View style={styles.card__company__appliction}>
        <Text style={styles.card__texth3}>{job?.created_at}</Text>
        <TouchableOpacity style={styles.card__button}>
          <Text style={styles.card__textbutton} onPress={apply}>
            Apply
          </Text>
        </TouchableOpacity>
        <Text style={styles.card__texth2}>{job?.company}</Text>
      </View>
      <View style={styles.card__company__badges}>
        <Text style={styles.card__textbadge1}>{job?.title}</Text>
        <Text style={styles.card__textbadge2}>{job?.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
