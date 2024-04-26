import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import data from "./assets/airbnb-listings.geo.json";

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

export default function App() {
  const coords = useMemo<Features[]>(() => (data as any).features, []);

  const selected = (item: any) => {};
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={INITIAL_REGION}
        style={{ flex: 1 }}
        clusterColor="#fff"
        clusterTextColor="#000"
        provider="google"
        showsUserLocation={true}
        renderCluster={({ id, geometry, onPress, properties }) => {
          const points = properties.point_count;
          return (
            <Marker
              key={`cluster-${id}`}
              coordinate={{
                longitude: geometry.coordinates[0],
                latitude: geometry.coordinates[1],
              }}
              onPress={onPress}
            >
              <View
                style={{
                  padding: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  elevation: 5,
                  borderRadius: 12,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 6,
                  shadowOffset: {
                    width: 1,
                    height: 10,
                  },
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {points}
                </Text>
              </View>
            </Marker>
          );
        }}
      >
        {coords.map((item: any) => (
          <Marker
            coordinate={{
              latitude: item.properties.latitude,
              longitude: item.properties.longitude,
            }}
            key={item.properties.id}
            onPress={() => selected(item)}
          >
            <View
              style={{
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                elevation: 5,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 6,
                shadowOffset: {
                  width: 1,
                  height: 10,
                },
              }}
            >
              <Text style={{ fontSize: 14 }}>€ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Picture_url {
  thumbnail: boolean;
  filename: string;
  format: string;
  width: number;
  mimetype: string;
  etag: string;
  id: string;
  last_synchronized: string;
  color_summary: string[];
  height: number;
}

export interface Property {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: string;
  name: string;
  summary: string;
  space: string;
  description: string;
  experiences_offered: string;
  neighborhood_overview: string;
  notes: string;
  transit: string;
  access: string;
  interaction: string;
  house_rules: string;
  thumbnail_url: string;
  medium_url: string;
  picture_url: Picture_url;
  xl_picture_url: string;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: string;
  host_location: string;
  host_about: string;
  host_response_time: string;
  host_response_rate: number;
  host_acceptance_rate?: any;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: string;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string[];
  street: string;
  neighbourhood: string;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: string;
  city: string;
  state: string;
  zipcode: string;
  market: string;
  smart_location: string;
  country_code: string;
  country: string;
  latitude: string;
  longitude: string;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bed_type: string;
  amenities: string[];
  square_feet?: any;
  price: number;
  weekly_price: number;
  monthly_price?: any;
  security_deposit?: any;
  cleaning_fee?: any;
  guests_included: number;
  extra_people: number;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: string;
  has_availability?: any;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: string;
  number_of_reviews: number;
  first_review: string;
  last_review: string;
  review_scores_rating: number;
  review_scores_accuracy: number;
  review_scores_cleanliness: number;
  review_scores_checkin: number;
  review_scores_communication: number;
  review_scores_location: number;
  review_scores_value: number;
  license?: any;
  jurisdiction_names?: any;
  cancellation_policy: string;
  calculated_host_listings_count: number;
  reviews_per_month: number;
  features: string[];
}

export interface Features {
  type: string;
  geometry: Geometry;
  properties: Property;
}
