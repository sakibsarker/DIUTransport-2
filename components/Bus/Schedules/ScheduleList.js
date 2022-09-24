import { FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import BusSchedule from "./Schedule/Schedule";

const ScheduleList = ({ route }) => {
  const theme = useTheme();
  //   console.log(route?.params?.schedules);

  const renderItem = ({ item }) => <BusSchedule props={item} />;

  return (
    <>
      {route?.params?.schedules.items.length > 0 ? (
        <View
          style={{
            margin: 25,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "bold", marginVertical: 15 }}
          >
            Starting List:{" "}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", marginVertical: 10 }}>Name</Text>
            <Text style={{ fontWeight: "bold", marginVertical: 10 }}>Day</Text>
            <Text style={{ fontWeight: "bold", marginVertical: 10 }}>Time</Text>
          </View>
          <FlatList
            data={route?.params?.schedules.items.filter(
              (x) => x.schedule.type === "Starting"
            )}
            numColumns={1}
            keyExtractor={(item) => `${item.schedule.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />

          <Text
            style={{ fontSize: 18, fontWeight: "bold", marginVertical: 15 }}
          >
            Departure List:{" "}
          </Text>
          <FlatList
            data={route?.params?.schedules.items.filter(
              (x) => x.schedule.type === "Departure"
            )}
            numColumns={1}
            keyExtractor={(item) => `${item.schedule.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <Text>No Schedules Available</Text>
      )}
    </>
  );
};

export default ScheduleList;
