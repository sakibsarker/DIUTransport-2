import React, { useContext, useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { mapNight } from "../Configs/MapNightStyle";
import Loader from "./Loader";
import { PreferencesContext } from "../contexts/PreferencesContext ";
import getDirections from "../Utils/DirectionPackage";
import * as Location from "expo-location";
import { getDirectionsFromSourceToDest } from "../Utils/getDirections";

let foregroundSubscription = null;
const MapMarker = ({ coordinates, title, contact }) => {
  const { isThemeDark } = useContext(PreferencesContext);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground.granted)
        await Location.requestBackgroundPermissionsAsync();
    };
    requestPermissions();
  }, []);

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }
    foregroundSubscription?.remove();

    foregroundSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (location) => {
        setPosition(location.coords);
      }
    );
  };

  const theme = useTheme();

  if (!coordinates) {
    return <Loader />;
  }

  const coords = {
    latitude: coordinates[1],
    longitude: coordinates[0],
  };

  const handleGetDirections = () => {
    startForegroundUpdate();
    const data = {
      source: {
        latitude: 23.935161957802864 || position.coords.latitude,
        longitude: 90.27736475418259 || position.coords.longitude,
      },
      destination: coords,
      params: [
        {
          key: "travelmode",
          value: "driving",
        },
        {
          key: "dir_action",
          value: "navigate",
        },
      ],
      waypoints: [
        {
          latitude: 23.935161957802864 || position.coords.latitude,
          longitude: 90.27736475418259 || position.coords.longitude,
        },
        coords,
      ],
    };

    getDirections(data);
  };

  // const [ccds, setCcds] = useState("40.1884979, 29.061018", "41.0082,28.9784");

  // useEffect(() => {
  //   setCcds(
  //     getDirectionsFromSourceToDest("40.1884979, 29.061018", "41.0082,28.9784")
  //   );
  // }, []);

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <MapView
            mapType="mutedStandard"
            provider={PROVIDER_GOOGLE}
            showsTraffic={true}
            showsIndoorLevelPicker={true}
            showsBuildings={true}
            showsIndoors={true}
            showsPointsOfInterest={true}
            showsMyLocationButton={true}
            showsScale={true}
            showsUserLocation={true}
            followsUserLocation={true}
            showsCompass={true}
            pitchEnabled={true}
            cacheEnabled={true}
            customMapStyle={isThemeDark ? mapNight : null}
            region={{
              latitude: coordinates[1],
              longitude: coordinates[0],
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
            style={styles.map}
          >
            {/* <Polyline coordinates={ccds} strokeWidth={2} strokeColor="red" /> */}

            <Marker
              coordinate={{
                latitude: coordinates[1],
                longitude: coordinates[0],
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}
              title={title || "সূর্যমুখি - ১"}
              description={contact || "ড্রাইভার: ০১৬১৬৩৪৬৮৩৫"}
            >
              <Image source={require("../assets/images/bus.png")} />
            </Marker>
          </MapView>

          <View
            style={{
              position: "absolute",
              bottom: 80,
              right: 20,
              padding: 8,
              borderRadius: 50,
              height: 45,
            }}
          >
            <Button
              style={{
                backgroundColor: theme.colors.accent,
              }}
              mode="contained"
              onPress={handleGetDirections}
            >
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    height: 45,
                  }}
                >
                  GET DIRECTIONS
                </Text>
              </View>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapMarker;
