import { Text } from "react-native-paper";
import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Image } from "react-native";

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      contact: props.contact,
      temp_cordinate: {
        latitude: props.location.coordinates[1],
        longitude: props.location.coordinates[0],
      },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsBuildings
          ref={(ref) => {
            this.map = ref;
          }}
          onRegionChange={() => {
            this.map.animateCamera(
              {
                center: { latitute: this.state.temp_cordinate },
                pitch: 45,
                heading: 20,
                altitude: 200,
                zoom: 40,
              },
              1000
            );
          }}
          region={{
            latitude: this.state.temp_cordinate.latitude,
            longitude: this.state.temp_cordinate.longitude,
            latitudeDelta: 1 / 300,
            longitudeDelta: 2 / 300,
          }}
          style={styles.mapStyle}
        >
          <Marker
            coordinate={{
              latitude: this.state.temp_cordinate.latitude,
              longitude: this.state.temp_cordinate.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
            title={this.state.title || "সূর্যমুখি - ১"}
            description={this.state.contact || "ড্রাইভার: ০১৬১৬৩৪৬৮৩৫"}
          >
            <Image source={require("../../assets/images/bus.png")} />
          </Marker>
        </MapView>
      </View>
    );
  }
}
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
