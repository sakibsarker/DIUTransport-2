import { View, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import React, { useMemo, useRef } from "react";
import { useTheme, Divider, Text } from "react-native-paper";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import DestinationToggle from "../../components/Bus/DestinationToggle";
import Drivers from "../../components/Bus/Drivers/Drivers";
import Conductor from "../../components/Bus/Conductor/Conductor";

const driver = {
  licenseExpiry: "2023-09-15",
  licenseNumber: "177SDFGDF47GG",
  name: "Foysal Sheikh",
  phone: "+01816118534",
};

const conductor = {
  name: "SR Joy",
  phone: "+88011561515",
};

const BusDetails = ({ route, navigation }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["15%", "55%"]);
  const theme = useTheme();
  const { info, busId } = route?.params;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: theme?.colors.cardToggle,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          position: "relative",
        }}
      >
        {/* <Map
        title={route.params["busId"]}
        busId={route.params["busId"]}
        info={info && info}
        location={
          info?.location || {
            coordinates: [90.269018, 23.936878],
          }
        }
      />

      <Image
        style={{
          maxHeight: 30,
          position: "absolute",
          zIndex: 1,
          width: 35,
          right: 15,
        }}
        source={require("../../assets/images/live.png")}
      /> */}

        <View style={{ padding: 15, alignItems: "center", display: "flex" }}>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            Today's Pilots!
          </Text>
        </View>
        <View style={{ paddingHorizontal: 25 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 15 }}
          >
            Driver
          </Text>
          <Divider />
          <Drivers driver={driver} />
          <Divider style={{ marginVertical: 20 }} />
          <Text
            style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 15 }}
          >
            Conductor
          </Text>
          <Divider />
          <Conductor conductor={conductor} />
        </View>

        <View style={{ paddingHorizontal: 25, paddingVertical: 35 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text variant="headlineLarge">Available Seats:</Text>
            <Text>25</Text>
          </View>
          <Divider style={{ marginBottom: 20, marginTop: 10 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text variant="headlineLarge">Resereved Seats:</Text>
            <Text>9</Text>
          </View>
          <Divider style={{ marginVertical: 15 }} />
          <DestinationToggle />
          <Divider style={{ marginBottom: 15 }} />
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.accent,
              padding: 15,
              borderRadius: 35,
              alignItems: "center",
              marginHorizontal: "22%",
            }}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text style={{ color: theme.colors.White }}>Buy Ticket Now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BusDetails;
