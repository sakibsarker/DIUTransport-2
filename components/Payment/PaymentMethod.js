import { Image, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";

const PaymentMethod = ({ props, navigation }) => {
  const theme = useTheme();
  const { id, name, icon } = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("confirmation")}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: theme.colors.cardToggle,
        marginBottom: 3,
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: "center",
      }}
    >
      <Image
        source={icon.uri}
        style={{
          width: 40,
          height: 40,
          marginRight: 20,
        }}
      />
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethod;
