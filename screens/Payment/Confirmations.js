import { StatusBar, TouchableOpacity, View } from "react-native";
import { Divider, Surface, Text, useTheme } from "react-native-paper";
import React from "react";

const Confirmations = ({ navigation }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
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
          <Text>SR Joy</Text>
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
          <Text>Bkash</Text>
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
          <Text>Surjomukhi 1</Text>
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
          <Text style={{}}>Destination:</Text>
          <Text>Narayanganj</Text>
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
          <Text style={{}}>Date &amp; Time:</Text>
          <Text>28 Jul ⚡️ 7:08 AM</Text>
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
          <Text>25 BDT.</Text>
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
            <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Surface>
    </View>
  );
};

export default Confirmations;
