import React from "react";
import { ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import { Divider, Surface, Text, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

const Confirmations = ({ navigation, route }) => {
  const { user } = useSelector((state) => state.user);
  const {
    busId,
    routeId,
    userId,
    method,
    scheduleId,
    routeName,
    ticketId,
    busName,
    ticketName,
    price,
  } = useSelector((state) => state.payment);

  console.log(busId, routeId, userId, method, scheduleId, ticketId);
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: theme.colors.accent,
            height: 70,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        ></View>
        <Surface
          elevation={4}
          style={{
            marginTop: -20,
            flexDirection: "column",
            backgroundColor: theme.colors.cardToggle,
            marginHorizontal: 40,
            paddingVertical: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Full Name:</Text>
            <Text>{user?.name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Payment Via:</Text>
            <Text>{method}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Bus Name:</Text>
            <Text>{busName}</Text>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Seat:</Text>
            <Text>E1</Text>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Route:</Text>
            <Text>{routeName}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Ticket Name:</Text>
            <Text>{ticketName}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: theme.colors.accent,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderStyle: "solid",
              marginHorizontal: 25,
              paddingVertical: 20,
            }}
          >
            <Text style={{}}>Amount to Pay:</Text>
            <Text>{price} BDT.</Text>
          </View>

          <Divider style={{ marginBottom: 25 }} />
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("paymentProcess")}
              style={{
                backgroundColor: theme.colors.green,
                borderRadius: 20,
                paddingHorizontal: 25,
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: theme.colors.White }}>Pay Now!</Text>
            </TouchableOpacity>
          </View>
        </Surface>
      </ScrollView>
    </View>
  );
};

export default Confirmations;
