import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Text, useTheme } from "react-native-paper";
import History from "../../components/Tickets/History";
import * as queries from "../../src/graphql/queries";
import { API } from "aws-amplify";
import { useSelector } from "react-redux";

const TicketHistory = ({ navigation }) => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.user);

  const [tickets, setTickets] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let filter = {
      userID: {
        eq: user.sub,
      },
      expired: {
        eq: false,
      },
    };
    API.graphql({
      query: queries.listTicketSales,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { filter: filter },
    })
      .then(({ data }) => {
        setTickets(data.listTicketSales.items);
        console.log(data.listTicketSales.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.errors[0]);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <History props={item} navigation={navigation} />
  );

  const renderPage = () => (
    <>
      {/* <View style={{ paddingHorizontal: 25, marginVertical: 10 }}>
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
      </View> */}
      <View style={{ paddingHorizontal: 25 }}>
        {tickets.length > 0 ? (
          <FlatList
            listKey={1}
            data={tickets}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 25,
            }}
          >
            No History Data Available!
          </Text>
        )}
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
