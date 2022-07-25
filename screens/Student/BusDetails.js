import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React, { useMemo, useRef, useEffect } from "react";
import { useTheme, Text, Divider, Button } from "react-native-paper";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusCurrentLocation } from "../../redux/ApiCalls/bus";
import Loader from "../../components/Loader";
import MapMarker from "../../components/MapMarker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SelectPayment from "../../components/Payment/SelectPayment";
import Payment from "../../components/Payment/Payment";
import Map from "../../components/Map/Map";

const Stack = createNativeStackNavigator();

const BusDetails = ({ route }) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "13%"]);
  const theme = useTheme();
  const dispatch = useDispatch();

  const { currentBusLocation, loading, error } = useSelector(
    (state) => state.bus
  );

  useEffect(() => {
    dispatch(fetchBusCurrentLocation(route.params["busId"]));
    if (error) {
      console.log(error);
    }
    console.log(currentBusLocation);
  }, []);

  if (loading && currentBusLocation?.location?.coordinates == undefined) {
    return <Loader />;
  }

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
        details={currentBusLocation}
        location={currentBusLocation?.location}
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
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: "center" }} variant="headlineLarge">
              Ticket Price: 25 BDT
            </Text>
            <Text style={{ textAlign: "center" }}>{route.params?.busId}</Text>
            <Text style={{ textAlign: "center" }}>{route.params?.routeId}</Text>
            <Divider style={{ marginBottom: 20, marginTop: 10 }} />
            <View style={{}}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SelectPayment" component={SelectPayment} />
                <Stack.Screen name="Payment" component={Payment} />
              </Stack.Navigator>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default BusDetails;
