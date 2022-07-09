import React, { useState } from "react";
//import MapboxGL from "@react-native-mapbox-gl/maps";
//const token = "sk.eyJ1Ijoic3Jqb3kiLCJhIjoiY2w1YzY1ZDJoMGVrZDNjc2VxNHQyMGJycCJ9.TzkF1ZZvOamM4o73e_brpg"
//MapBoxGL.setAccessToken(token)
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Text, useTheme } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").height,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  map: {
    flex: 1,
  },
});

const MapMarker = ({ coordinates }) => {
  const theme = useTheme();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <SafeAreaView>
        {Platform.OS == "ios" || Platform.OS =="android" ? (
          <Text>Map</Text>
        ) : (
          <>
            <MapBoxGL.MapView
              styleURL={`mapbox://styles/mapbox/streets-v11`}
              style={styles.map}
              zoomLevel={14}
              centerCoordinate={coordinates}
              onDidFinishLoadingStyle={onDidFinishLoadingStyle}
            >
              {styleLoaded.hasFinishedLoadingStyle ? (
                <>
                  <MapBoxGL.Camera
                    zoomLevel={16}
                    animationMode={"flyTo"}
                    animationDuration={500}
                    centerCoordinate={coordinates}
                  />
                  <MapBoxGL.MarkerView coordinate={coordinates}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>GG</Text>
                    </View>
                  </MapBoxGL.MarkerView>
                </>
              ) : null}
            </MapBoxGL.MapView>
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default MapMarker;
