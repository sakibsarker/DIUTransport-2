import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Schedules = ({ schedules, busInfo, busId }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 50,
        backgroundColor: theme.colors.darkPurple,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 35,
      }}
      onPress={() =>
        navigation.navigate("ScheduleList", {
          info: busInfo,
          schedules: schedules,
          busId: busId,
        })
      }
    >
      <Text style={{ color: theme.colors.White }}>Schedules</Text>
    </TouchableOpacity>
  );
};

export default Schedules;
