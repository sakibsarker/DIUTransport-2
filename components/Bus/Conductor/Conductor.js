import { View } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const Conductor = ({ conductor }) => {
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
        <Text style={{}}>{conductor?.name}</Text>
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
        <Text style={{}}>{conductor?.phone}</Text>
      </View>
    </View>
  );
};
export default Conductor;
