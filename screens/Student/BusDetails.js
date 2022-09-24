import { View, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import React from "react";
import { useTheme, Divider, Text } from "react-native-paper";
import Drivers from "../../components/Bus/Drivers/Drivers";
import Conductor from "../../components/Bus/Conductor/Conductor";
import { useDispatch, useSelector } from "react-redux";
import Schedules from "../../components/Bus/Schedules/Schedules";
import { setBus, setRoute, setUserId } from "../../redux/Reducers/payment";

const BusDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { group, user } = useSelector((state) => state.user);
  const theme = useTheme();
  const { info, busId, routeInfo } = route?.params;
  console.log(info);
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

          <Drivers driver={info?.Driver} />
          <Divider style={{ marginVertical: 20 }} />
          <Text
            style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 15 }}
          >
            Conductor
          </Text>
          <Divider />
          <Conductor conductor={info?.Conductor} />
        </View>

        <View style={{ paddingHorizontal: 25, paddingVertical: 35 }}>
          {/* <View
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
          <Divider style={{ marginBottom: 15 }} /> */}

          <Schedules schedules={info?.Schedules} busInfo={info} busId={busId} />

          {group && group.includes("Faculty") ? (
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.accent,
                padding: 15,
                borderRadius: 35,
                alignItems: "center",
                marginHorizontal: "22%",
              }}
              onPress={() =>
                navigation.navigate("BusLocate", {
                  busId: busId,
                  info,
                })
              }
            >
              <Text style={{ color: theme.colors.White }}>View Location!</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.accent,
                padding: 15,
                borderRadius: 35,
                alignItems: "center",
                marginHorizontal: "22%",
              }}
              onPress={() => {
                dispatch(setBus({ busId: busId, busName: info?.name }));
                dispatch(
                  setRoute({
                    routeId: routeInfo?.id,
                    routeName: routeInfo?.routeName,
                  })
                );
                dispatch(setUserId({ userId: user?.preferred_username }));
                navigation.navigate("Payment", {
                  busId,
                });
              }}
            >
              <Text style={{ color: theme.colors.White }}>Buy Ticket Now!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default BusDetails;
