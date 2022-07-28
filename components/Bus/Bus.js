import { TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Surface, Text, useTheme } from "react-native-paper";

const Bus = ({ navigation, props }) => {
  const theme = useTheme();
  const { id, backgroundColor, name, busId, status, location } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.cardToggle,
        borderRadius: 10,
        marginVertical: 20,
      }}
      onPress={() =>
        navigation.navigate("BusDetails", {
          busId: busId,
        })
      }
    >
      <View
        style={{
          height: 50,
          backgroundColor: backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textTransform: "uppercase" }}>{name}</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 25,
          paddingHorizontal: 45,
        }}
      >
        <Text>{name}</Text>
        <Text>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Bus;
