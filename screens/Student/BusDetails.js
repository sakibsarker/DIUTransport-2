import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
} from "react-native";
import React, { useMemo, useRef } from "react";
import { useTheme, Divider } from "react-native-paper";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import Map from "../../components/Map/Map";

import DestinationToggle from "../../components/Bus/DestinationToggle";

const BusDetails = ({ route, navigation }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["15%", "55%"]);
  const theme = useTheme();
  const { info, busId } = route?.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        position: "relative",
      }}
    >
      {/* <MapMarker
        title={route.params["busId"]}
        coordinates={currentBusLocation?.location?.coordinates}
      /> */}
      <Map
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
      />

      <BottomSheet
        ref={bottomSheetRef}
        style={{ flex: 1 }}
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetView
          style={{
            ...styles.contentContainer,
            backgroundColor: theme.colors.surface,
          }}
        >
          <View style={{ paddingHorizontal: 40 }}>
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

            <DestinationToggle />
            <Divider style={{ marginVertical: 10 }} />
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
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "100%",
  },
});

export default BusDetails;
