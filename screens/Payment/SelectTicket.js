import { FlatList, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React, { useEffect, useState } from "react";
import Ticket from "../../components/Bus/Ticket/Ticket";
import { useSelector } from "react-redux";
import { API } from "aws-amplify";
import * as queries from "../../src/graphql/queries";
import Loader from "../../components/Loader";

const SelectTicket = ({ navigation }) => {
  const theme = useTheme();
  const { busId } = useSelector((state) => state.payment);

  //   const ticketData = [
  //     {
  //       id: 1,
  //       price: 25,
  //       name: "ALCHEMILLA",
  //     },
  //     {
  //       id: 2,
  //       price: 35,
  //       name: "ALYSSUM",
  //     },
  //   ];

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let filter = {
      busID: {
        eq: busId,
      },
    };

    API.graphql({
      query: queries.listTickets,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: { filter: filter },
    })
      .then(({ data }) => {
        setTickets(data.listTickets.items);
        // console.log(data.listRoutes.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Ticket props={item} navigation={navigation} />
  );

  if (loading) return <Loader />;

  return (
    <View style={{ marginHorizontal: 25 }}>
      {tickets.length > 0 ? (
        <FlatList
          data={tickets}
          numColumns={1}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>No Tickets Available!</Text>
      )}
    </View>
  );
};

export default SelectTicket;
