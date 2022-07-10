import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useMemo, useRef, useCallback, useEffect } from "react";
import { useTheme, Text, Divider } from "react-native-paper";
import BottomSheet from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusCurrentLocation } from "../../redux/ApiCalls/bus";
import Loader from "../../components/Loader";
import MapMarker from "../../components/MapMarker";

const BusDetails = ({ navigation, route }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "10%"]);
  const theme = useTheme();
  const dispatch = useDispatch();

  const { currentBusLocation, loading, error } = useSelector(
    (state) => state.bus
  );

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    dispatch(fetchBusCurrentLocation("surjomukhi22"));
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
      }}
    >
      <MapMarker coordinates={currentBusLocation?.location?.coordinates} />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={{ borderBottomColor: "#000", borderBottomWidth: 50 }}>
            Ticket Price: 25 BDT
          </Text>
          <Text>Options: </Text>
          <TouchableOpacity>
            <Text>1: BKash</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>2: OneCard</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BusDetails;
