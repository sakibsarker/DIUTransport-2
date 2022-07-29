import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectSchedule from "../../screens/Payment/SelectSchedule";
import SelectSeat from "../../screens/Payment/SelectSeat";
import SelectMethod from "../../screens/Payment/SelectMethod";
import Confirmations from "../../screens/Payment/Confirmations";
import PaymentProcess from "../../screens/Payment/PaymentProcess";
const Stack = createNativeStackNavigator();
const PaymentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="selectSchedule"
    >
      <Stack.Screen
        name="selectSchedule"
        component={SelectSchedule}
        options={{
          title: "Schedule Selection",
        }}
      />
      <Stack.Screen
        name="selectSeat"
        component={SelectSeat}
        options={{
          title: "Select A Seat",
        }}
      />
      <Stack.Screen
        name="selectMethod"
        component={SelectMethod}
        options={{
          title: "Payment Method",
        }}
      />
      <Stack.Screen
        name="confirmation"
        component={Confirmations}
        options={{
          title: "Confirmation",
        }}
      />
      <Stack.Screen
        name="paymentProcess"
        component={PaymentProcess}
        options={{
          title: "Processing",
        }}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;
