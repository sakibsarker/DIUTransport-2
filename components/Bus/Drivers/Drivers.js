import { View } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const Drivers = ({ driver }) => {
  const theme = useTheme();
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          borderWidth: 1,
          borderColor: theme.colors.accent,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Name: </Text>
        <Text style={{}}>{driver?.name}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          borderWidth: 1,
          borderColor: theme.colors.accent,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>License Expiry: </Text>
        <Text style={{}}>{driver?.licenseExpiry}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          borderWidth: 1,
          borderColor: theme.colors.accent,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>License Number: </Text>
        <Text style={{}}>{driver?.licenseNumber}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          borderWidth: 1,
          borderColor: theme.colors.accent,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Phone: </Text>
        <Text style={{}}>{driver?.phone}</Text>
      </View>
    </View>
  );
};
export default Drivers;
