import { Text } from "react-native-paper";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Dimensions, Image } from "react-native";

const Map = (props) => {
  const _map = useRef(null);
  const [temp_cordinate, setTemp_coords] = useState({
    latitude: props?.location?.coordinates[1],
    longitude: props?.location?.coordinates[0],
  });

  useEffect(() => {
    if (_map.current) {
      _map.current.animateCamera(
        {
          center: {
            latitude: temp_cordinate.latitude,
            longitude: temp_cordinate.longitude,
          },
          zoom: 15,
        },
        5000
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsTraffic
        ref={_map}
        initialRegion={{
          latitude: temp_cordinate.latitude,
          longitude: temp_cordinate.longitude,
          latitudeDelta: 1 / 300,
          longitudeDelta: 2 / 300,
        }}
        style={styles.mapStyle}
      >
        <Marker
          coordinate={{
            latitude: temp_cordinate.latitude,
            longitude: temp_cordinate.longitude,
            latitudeDelta: 1 / 300,
            longitudeDelta: 2 / 300,
          }}
          title={props.title || "সূর্যমুখি - ১"}
          description={props.contact || "ড্রাইভার: ০১৬১৬৩৪৬৮৩৫"}
        >
          <Image source={require("../../assets/images/bus.png")} />
        </Marker>
      </MapView>
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
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default Map;
