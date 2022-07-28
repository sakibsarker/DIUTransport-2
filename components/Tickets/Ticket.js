import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, useTheme, Text } from "react-native-paper";

const Ticket = ({ props, navigation }) => {
  const theme = useTheme();
  const {
    time,
    price,
    id,
    date,
    busName,
    name,
    paymentVia,
    destination,
    backgroundColor,
    token,
  } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("TicketDetails", {
          info: props,
        })
      }
      style={{
        marginVertical: 30,
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: backgroundColor,
          width: "100%",
          height: 40,
          zIndex: 1,
        }}
      ></View>
      <View
        style={{
          zIndex: 3,
          backgroundColor: theme.colors.cardToggle,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Text>{busName}</Text>
        <Text>{destination}</Text>
        <Divider style={{ marginVertical: 10 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View>
            <Text>Time</Text>
            <Text>{time}</Text>
          </View>
          <View>
            <Text>Date</Text>
            <Text>{date}</Text>
          </View>
          <View>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../../assets/images/qr-code-scan.png")}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Ticket;
