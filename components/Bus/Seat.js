import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import MIcon from "react-native-vector-icons/MaterialIcons";

const Seat = ({ props, navigation }) => {
  const theme = useTheme();
  const { id, available, seatId, booked, sold } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("selectMethod")}
      style={{ marginVertical: 15, flexDirection: "row" }}
    >
      <MIcon
        name="airline-seat-recline-extra"
        size={25}
        color={
          available
            ? theme.colors.green
            : booked
            ? theme.colors.darkPurple
            : theme.colors.darkRed
        }
      />
      <Text>{seatId}</Text>
    </TouchableOpacity>
  );
};

export default Seat;
