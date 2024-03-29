import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Student/Home";
import BusDetails from "../../screens/Student/BusDetails";
import PaymentStack from "../Payment/PaymentStack";
import ViewAll from "../../screens/Student/ViewAll";
import TicketStack from "../Ticket/TicketStack";
import NoticeStack from "../Notice/NoticeStack";
import Help from "../../screens/HelpPage/Help";
import RouteDetails from "../../components/Home/RouteDetails";
import TicketHistory from "../../screens/Student/TicketHistory";
import BusLocate from "../../components/Bus/BusLocate";
import ScheduleList from "../../components/Bus/Schedules/ScheduleList";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BusLocate"
        component={BusLocate}
        title="LIVE LOCATION"
      />
      <Stack.Screen
        name="BusDetails"
        component={BusDetails}
        options={({ route }) => ({
          title: route.params?.info?.name,
        })}
      />
      <Stack.Screen
        name="ScheduleList"
        component={ScheduleList}
        options={({ route }) => ({
          title: route.params?.info?.name,
        })}
      />
      <Stack.Screen name="Payment" component={PaymentStack} />
      <Stack.Screen
        name="RouteDetails"
        component={RouteDetails}
        options={({ route }) => ({
          title: route.params?.routeId,
        })}
      />
      <Stack.Screen name="Routes" component={ViewAll} />
      <Stack.Screen
        name="THistory"
        component={TicketHistory}
        options={{ title: "History" }}
      />
      <Stack.Screen
        name="Tickets"
        screenOptions={{ headerShown: false }}
        component={TicketStack}
      />
      <Stack.Screen name="Notifications" component={NoticeStack} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

export default HomeStack;
