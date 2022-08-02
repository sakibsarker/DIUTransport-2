import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, useTheme, Text } from "react-native-paper";

const Schedule = ({ props, navigation }) => {
  const theme = useTheme();
  const { time, id } = props;
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: theme.colors.cardToggle,
        marginBottom: 3,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("selectSeat")}
    >
      <Text style={{ fontWeight: "bold" }}>⏱ {time}</Text>
    </TouchableOpacity>
  );
};

export default Schedule;
