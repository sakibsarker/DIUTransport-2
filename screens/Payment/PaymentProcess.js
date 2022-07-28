import { View, Image, TouchableOpacity } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";

const PaymentProcess = ({ navigation }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.cardToggle,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: "100%", height: 350 }}
        source={require("../../assets/images/paymentSuccess.webp")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text>Success!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentProcess;
