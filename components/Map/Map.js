import { Text } from "react-native-paper";
import React, { Component } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

export class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsBuildings
          ref={(ref) => {
            this.map = ref;
          }}
          onLayout={() => {
            this.map.animateToBearing(125);
            this.map.animateToViewingAngle(45);
          }}
          initialRegion={{
            latitude: 41.8781,
            longitude: -87.6298,
            latitudeDelta: 1 / 300,
            longitudeDelta: 2 / 300,
          }}
          style={styles.mapStyle}
        />
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
