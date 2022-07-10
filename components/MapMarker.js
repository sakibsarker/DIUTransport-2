import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Loader from "./Loader";

const MapMarker = ({ coordinates, title, contact }) => {
  const theme = useTheme();

  if (!coordinates) {
    return <Loader />;
  }

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: coordinates[1],
              longitude: coordinates[0],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          >
            <Marker
              coordinate={{
                latitude: coordinates[1],
                longitude: coordinates[0],
              }}
              title={title || "সূর্যমুখি - ১"}
              description={contact || "ড্রাইভার: ০১৬১৬৩৪৬৮৩৫"}
            >
              <Image
                source={require("../assets/images/bus.png")}
                style={{ height: 80, width: 80 }}
              />
            </Marker>
          </MapView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapMarker;
