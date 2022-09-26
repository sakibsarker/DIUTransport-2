import { View, Image, TouchableOpacity, Alert } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React, { useEffect, useState } from "react";
import PaymentLoader from "../../components/PaymentLoader";
import { useSelector } from "react-redux";
import * as mutation from "../../src/graphql/mutations";
import { API } from "aws-amplify";

const PaymentProcess = ({ navigation }) => {
  const theme = useTheme();

  const { user } = useSelector((state) => state.user);
  const {
    busId,
    routeId,
    userId,
    method,
    routeName,
    ticketId,
    busName,
    ticketName,
    price,
  } = useSelector((state) => state.payment);

  useEffect(() => {
    const ticketDetails = {
      busID: busId,
      name: ticketName,
      paymentVia: method,
      price: price,
      routeID: routeId,
      token: `${user?.name},${routeName},${busName},${ticketName}`,
      userID: user?.sub,
      busTicketSalesId: busId,
      routeTicketSalesId: routeId,
      TicketID: ticketId,
    };

    API.graphql({
      query: mutation.createTicketSale,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        input: ticketDetails,
      },
    })
      .then(({ data }) => {
        navigation.replace("Tickets");
      })
      .catch((err) => {
        Alert.alert("Error", "Something Went Wrong!");
        navigation.replace("BusDetails");
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.cardToggle,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PaymentLoader />
    </View>
  );
};

export default PaymentProcess;
