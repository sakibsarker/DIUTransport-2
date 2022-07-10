import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapMarker = ({ coordinates }) => {
  const theme = useTheme();
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
              title="bus1"
              description="bus 1: 01616346835"
            />
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
