import React, { useContext, useEffect, useState } from "react";

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
import { mapNight } from "../Configs/MapNightStyle";
import Loader from "./Loader";
import { PreferencesContext } from "../contexts/PreferencesContext ";

const MapMarker = ({ coordinates, title, contact }) => {
  const { isThemeDark } = useContext(PreferencesContext);

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
            showsTraffic={true}
            showsUserLocation={true}
            followsUserLocation={true}
            showsCompass={true}
            pitchEnabled={true}
            cacheEnabled={true}
            customMapStyle={isThemeDark ? mapNight : null}
            region={{
              latitude: coordinates[1],
              longitude: coordinates[0],
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
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
              <Image source={require("../assets/images/bus.png")} />
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
