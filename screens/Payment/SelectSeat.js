import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Seat from "../../components/Bus/Seat";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { useTheme, Text } from "react-native-paper";

const SelectSeat = ({ navigation }) => {
  const theme = useTheme();
  const seatData = [
    {
      id: 1,
      seatId: "A1",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 2,
      seatId: "A2",
      booked: false,
      sold: true,
      available: false,
    },
    {
      id: 3,
      seatId: "A3",
      booked: false,
      sold: true,
      available: false,
    },
    {
      id: 4,
      seatId: "A4",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 5,
      seatId: "B1",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 6,
      seatId: "B2",
      booked: true,
      sold: false,
      available: false,
    },
    {
      id: 7,
      seatId: "B3",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 8,
      seatId: "B4",
      booked: true,
      sold: false,
      available: false,
    },
    {
      id: 9,
      seatId: "C1",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 10,
      seatId: "C2",
      booked: false,
      sold: true,
      available: false,
    },
    {
      id: 11,
      seatId: "C3",
      booked: false,
      sold: true,
      available: false,
    },
    {
      id: 12,
      seatId: "C4",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 13,
      seatId: "D1",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 14,
      seatId: "D2",
      booked: true,
      sold: false,
      available: false,
    },
    {
      id: 15,
      seatId: "D3",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 16,
      seatId: "D4",
      booked: true,
      sold: false,
      available: false,
    },
    {
      id: 17,
      seatId: "E1",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 18,
      seatId: "E2",
      booked: false,
      sold: true,
      available: false,
    },
    {
      id: 19,
      seatId: "E3",
      booked: false,
      sold: true,
      available: false,
    },
    {
      id: 20,
      seatId: "E4",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 21,
      seatId: "F1",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 22,
      seatId: "F2",
      booked: true,
      sold: false,
      available: false,
    },
    {
      id: 23,
      seatId: "F3",
      booked: false,
      sold: false,
      available: true,
    },
    {
      id: 24,
      seatId: "F4",
      booked: true,
      sold: false,
      available: false,
    },
  ];

  const renderItem = ({ item }) => (
    <Seat props={item} navigation={navigation} />
  );

  return (
    <View style={{ padding: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 45,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MIcon
            name="airline-seat-recline-extra"
            size={25}
            color={theme.colors.green}
          />
          <Text>Available</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MIcon
            name="airline-seat-recline-extra"
            size={25}
            color={theme.colors.darkPurple}
          />
          <Text>Booked</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MIcon
            name="airline-seat-recline-extra"
            size={25}
            color={theme.colors.darkRed}
          />
          <Text>Sold</Text>
        </View>
      </View>
      <FlatList
        data={seatData}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.cardToggle,
            alignItems: "center",
            borderRadius: 40,
            padding: 20,
            marginVertical: 30,
          }}
          onPress={() => navigation.navigate("selectMethod")}
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectSeat;
