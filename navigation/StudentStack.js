import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/Student/Profile";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import StudentTabNavigator from "./StudentTabNavigator";
import NoticeBoard from "../screens/NoticeBoard";
import Tickets from "../screens/Student/Tickets";
import TicketDetails from "../screens/Student/TicketDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Student/Settings";
import TicketHistory from "../screens/Student/TicketHistory";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Your Tickets" component={Tickets} />
      <Stack.Screen
        name="TicketDetails"
        component={TicketDetails}
        options={({ route }) => ({
          title: route.params?.value,
        })}
      />
    </Stack.Navigator>
  );
};

const StudentStack = () => {
  const theme = useTheme();

  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: theme.colors.accent,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StudentTabNavigator}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tickets"
          component={TicketStack}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="ios-pricetags" size={size} color={color} />
            ),
          }}
        />
         <Drawer.Screen
          name="Ticket History"
          component={TicketHistory}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="md-time" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default StudentStack;
