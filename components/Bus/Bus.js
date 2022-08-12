import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";

const Bus = ({ navigation, props }) => {
  const theme = useTheme();
  const { busNo, backgroundColor, name, busId, status, location } = props;

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
          info: {
            busNo,
            status,
            name,
            location,
          },
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
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 18,
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
        <Text>Status : {status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Bus;
