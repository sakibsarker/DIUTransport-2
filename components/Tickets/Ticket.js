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
        marginVertical: 15,
        position: "relative",
        paddingHorizontal: 15,
      }}
    >
      {/* <View
        style={{
          backgroundColor: backgroundColor,
          width: "100%",
          height: 40,
          zIndex: 1,
          borderRadius: 30,
        }}
      ></View> */}
      <View
        style={{
          zIndex: 3,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 15,
          paddingHorizontal: 30,
          paddingVertical: 50,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
          {busName}
        </Text>
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
            <Text style={{ marginBottom: 5 }}>⏱ Time</Text>
            <Text style={{ marginLeft: 25 }}>{time}</Text>
          </View>
          <View>
            <Text style={{ marginBottom: 5 }}>🗓 Date</Text>
            <Text style={{ marginLeft: 25 }}>{date}</Text>
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
