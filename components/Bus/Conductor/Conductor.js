import { View } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const Conductor = ({ conductor }) => {
  const theme = useTheme();
  const { name, phone } = conductor;
  return (
    <>
      {conductor ? (
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
            <Text style={{}}>{name}</Text>
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
            <Text style={{}}>{phone}</Text>
          </View>
        </View>
      ) : (
        <Text>No Conductors Available!</Text>
      )}
    </>
  );
};
export default Conductor;
