import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { useTheme, Text } from "react-native-paper";
import History from "../../components/Tickets/History";

const TicketHistory = ({ navigation }) => {
  const theme = useTheme();
  const HistoryData = [
    {
      id: 1,
      busName: "Surjomukhi 27",
      date: "19 June 2022",
      price: "25.00 BDT",
      route: "R1",
      time: "5.37 PM",
    },
    {
      id: 2,
      busName: "Surjomukhi 7",
      date: "22 June 2022",
      price: "35.00 BDT",
      route: "R3",
      time: "5.30 PM",
    },
  ];

  const renderItem = ({ item }) => (
    <History props={item} navigation={navigation} />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <View style={{ paddingHorizontal: 25, marginVertical: 10 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            June , 2022
          </Text>
        </View>
        <View style={{ paddingHorizontal: 25 }}>
          <FlatList
            data={HistoryData}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TicketHistory;
