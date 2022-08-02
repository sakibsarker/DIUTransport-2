import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { useTheme, Text } from "react-native-paper";
import History from "../../components/Tickets/History";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

const TicketHistory = ({ navigation }) => {
  const theme = useTheme();
  const [date, setDate] = React.useState("");
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

  const renderPage = () => (
    <>
      <View style={{ paddingHorizontal: 25, marginVertical: 10 }}>
        <DatePicker
          options={{
            mainColor: theme.colors.accent,
            backgroundColor: theme.colors.cardToggle,
            textDefaultColor: theme.colors.text,
            textHeaderColor: theme.colors.text,
          }}
          mode="monthYear"
          selectorStartingYear={2022}
          minimumDate={getFormatedDate(new Date(), "YYYY/MM/DD")}
          onMonthYearChange={(selectedDate) => setDate(selectedDate)}
        />
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <FlatList
          listKey={1}
          data={HistoryData}
          numColumns={1}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
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
        <FlatList
          data={[{}]}
          numColumns={1}
          renderItem={renderPage}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default TicketHistory;
