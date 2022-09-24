import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";

const BusSchedule = ({ props }) => {
  const theme = useTheme();
  const { day, name, time, type, updatedAt } = props?.schedule;
  //   console.log(props);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ marginVertical: 10 }}>{name}</Text>
      <Text style={{ marginVertical: 10 }}>{day}</Text>
      <Text style={{ marginVertical: 10 }}>{time}</Text>
    </View>
  );
};

export default BusSchedule;
