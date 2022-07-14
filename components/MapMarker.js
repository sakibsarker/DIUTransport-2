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

  // Start location tracking in foreground
  const startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("location tracking denied");
      return;
    }

    // Make sure that foreground location tracking is not running
    foregroundSubscription?.remove();

    // Start watching position in real-time
    foregroundSubscription = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
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
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate", // this instantly initializes navigation using the given travel mode
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

  const [cd, setCd] = useState({
    coordinates: [
      {
        latitude: 37.3317876,
        longitude: -122.0054812,
      },
      {
        latitude: 37.771707,
        longitude: -122.4053769,
      },
    ],
  });

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <MapView
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
            <Polyline
              coordinates={[
                { latitude: 23.8769005, longitude: 90.3179705 },
                { latitude: 23.8575108, longitude: 90.3091192 },
                { latitude: 23.8243941, longitude: 90.3346313 },
                { latitude: 23.8237739, longitude: 90.3490509 },
                { latitude: 23.7542285, longitude: 90.3741734 },
              ]}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                "#7F0000",
                "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
                "#B24112",
                "#E5845C",
                "#238C23",
                "#7F0000",
              ]}
              strokeWidth={6}
            />
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

            {/* <MapViewDirections
              origin={cd.coordinates[0]}
              destination={cd.coordinates[1]}
              apikey={`AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8`}
              strokeWidth={3}
              strokeColor="hotpink"
            /> */}
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
