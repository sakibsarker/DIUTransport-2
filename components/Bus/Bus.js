import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";

const Bus = ({ navigation, props, info }) => {
  const theme = useTheme();
  const { bus } = props;
  const {
    Conductor,
    Driver,
    Schedules,
    id,
    name,
    status_on,
    trackingID,
    updatedAt,
    Tickets,
  } = bus;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.cardToggle,
        borderRadius: 10,
        marginVertical: 20,
      }}
      onPress={() =>
        navigation.navigate("BusDetails", {
          busId: id,
          info: {
            Conductor,
            Driver,
            Schedules,
            id,
            name,
            status_on,
            trackingID,
            updatedAt,
            Tickets,
          },
          routeInfo: info,
        })
      }
    >
      <View
        style={{
          height: 50,
          backgroundColor: theme.colors.darkPurple,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 18,
            color: theme.colors.White,
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text style={{ marginVertical: 10 }}>{name}</Text>
        <Text>Status : {status_on ? "Available" : "Not Available"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Bus;
