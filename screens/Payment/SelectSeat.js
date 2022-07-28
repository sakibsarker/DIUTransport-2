import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Seat from "../../components/Bus/Seat";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { useTheme, Text } from "react-native-paper";

const SelectSeat = ({ navigation }) => {
  const theme = useTheme();
  const seatData = {
    left: [
      {
        id: 1,
        seatId: "A1",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 2,
        seatId: "A2",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 3,
        seatId: "B1",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 4,
        seatId: "B2",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 5,
        seatId: "C1",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 6,
        seatId: "C2",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 7,
        seatId: "D1",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 8,
        seatId: "D2",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 9,
        seatId: "E1",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 10,
        seatId: "E2",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 11,
        seatId: "F1",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 12,
        seatId: "F2",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 13,
        seatId: "G1",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 14,
        seatId: "G2",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 15,
        seatId: "H1",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 16,
        seatId: "H2",
        booked: false,
        sold: false,
        available: true,
      },
    ],
    right: [
      {
        id: 1,
        seatId: "A3",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 2,
        seatId: "A4",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 3,
        seatId: "B3",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 4,
        seatId: "B4",
        booked: true,
        sold: false,
        available: false,
      },
      {
        id: 5,
        seatId: "C3",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 6,
        seatId: "C4",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 7,
        seatId: "D3",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 8,
        seatId: "D4",
        booked: false,
        sold: true,
        available: false,
      },
      {
        id: 9,
        seatId: "E3",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 10,
        seatId: "E4",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 11,
        seatId: "F3",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 12,
        seatId: "F4",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 13,
        seatId: "G3",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 14,
        seatId: "G4",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 15,
        seatId: "H3",
        booked: false,
        sold: false,
        available: true,
      },
      {
        id: 16,
        seatId: "H4",
        booked: false,
        sold: false,
        available: true,
      },
    ],
  };

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
          <Text>Teachers</Text>
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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FlatList
          data={seatData.left}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center" }}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        <FlatList
          data={seatData.right}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "center" }}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SelectSeat;
