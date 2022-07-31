import { Text, useTheme } from "react-native-paper";
import React, { useEffect, useRef, useState } from "react";
import MapView, {
  AnimatedRegion,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import useSWR from "swr";
import Loader from "../Loader";

const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = ({ busId, location, info }) => {
  const theme = useTheme();
  const mapRef = useRef(null);
  const markerRef = useRef();

  const [state, setState] = useState({
    curLoc: {
      latitude: location.coordinates[0],
      longitude: location.coordinates[1],
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: location.coordinates[0],
      longitude: location.coordinates[1],
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  });
  const { curLoc, coordinate } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const busFetcher = async () => {
    const response = await fetch(
      `https://boiling-escarpment-76670.herokuapp.com/api/v1/bus/${busId}`
    );
    return response.json();
  };

  const { data, error } = useSWR("/bus/location", busFetcher, {
    refreshInterval: 1000,
  });

  useEffect(() => {
    console.log(data?.location?.coordinates);
    const latitude = data?.location?.coordinates[1];
    const longitude = data?.location?.coordinates[0];

    if (latitude && longitude) {
      animate(latitude, longitude);

      updateState({
        curLoc: { latitude, longitude },
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  }, [data]);

  useEffect(() => {
    onCenter(curLoc?.latitude, curLoc?.longitude);
  }, [curLoc]);

  const onCenter = (latitude, longitude) => {
    if (latitude && longitude) {
      mapRef?.current?.animateToRegion(
        {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        500
      );
    }
  };

  const animate = (latitude, longitude) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS == "android") {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  if (!data || error) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <MapView.Animated
        moveOnMarkerPress={true}
        provider={PROVIDER_GOOGLE}
        showsTraffic
        ref={mapRef}
        initialRegion={{
          ...curLoc,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={styles.mapStyle}
      >
        <Marker.Animated
          ref={markerRef}
          coordinate={coordinate}
          title={info?.title || "সূর্যমুখি - ১"}
          description={info?.contact || "ড্রাইভার: ০১৬১৬৩৪৬৮৩৫"}
        >
          <Image source={require("../../assets/images/bus.png")} />
        </Marker.Animated>
      </MapView.Animated>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "25%",
          right: "5%",
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 100,
          padding: 15,
        }}
        onPress={onCenter}
      >
        <Icon name="pin" size={35} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default Map;
