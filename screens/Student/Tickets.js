import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ticket from "../../components/Tickets/Ticket";
import { useTheme, Text, List, Surface } from "react-native-paper";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import * as queries from "../../src/graphql/queries";
import { API } from "aws-amplify";

const Tickets = ({ navigation, route }) => {
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
    <Ticket props={item} navigation={navigation} />
  );

  if (loading) return <Loader />;

  return (
    <View
      style={{
        backgroundColor: theme?.colors.surface,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <View style={{ paddingHorizontal: 25 }}>
          {tickets.length > 0 ? (
            <FlatList
              data={tickets}
              numColumns={1}
              keyExtractor={(item) => `${item.id}`}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text style={{ textAlign: "center", marginVertical: 35 }}>
              You don't have any tickets , Please Buy one!
            </Text>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Tickets;
