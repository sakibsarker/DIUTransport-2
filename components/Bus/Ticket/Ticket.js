import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setTicketId } from "../../../redux/Reducers/payment";

const Ticket = ({ navigation, props }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { name, price, id } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.cardToggle,
        marginVertical: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.colors.whiteToggle,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
      onPress={() => {
        dispatch(setTicketId({ ticketId: id, ticketName: name, price: price }));
        navigation.navigate("selectMethod");
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Name: </Text>
        <Text>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 15,
        }}
      >
        <Text>Price: </Text>
        <Text>{price} BDT</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Ticket;
