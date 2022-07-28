import { ImageBackground, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme, Text, Divider } from "react-native-paper";

const Route = ({ props, navigation }) => {
  const theme = useTheme();
  const {
    id,
    routeId,
    routeName,
    startTimes,
    routeDetails,
    departureTimes,
    noOfBuses,
    image,
    duration,
    distance,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RouteDetails", { info: props })}
      style={{ marginVertical: 40 }}
    >
      <ImageBackground source={{ uri: image }} style={{ padding: 50 }} />
      <View
        style={{
          backgroundColor: theme.colors.cardToggle,
          marginTop: -20,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{routeId}</Text>
          <Text>{routeName}</Text>
        </View>
        <Divider style={{ marginVertical: 10 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Available Buses: </Text>
          <Text>{noOfBuses}</Text>
        </View>
        <Divider style={{ marginVertical: 10 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Distance: </Text>
          <Text>{distance}</Text>
        </View>
        <Divider style={{ marginVertical: 10 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Average Duration: </Text>
          <Text>{duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Route;
