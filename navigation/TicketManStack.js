import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/TicketMan/Home";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";

import NoticeBoard from "../screens/NoticeBoard";
import TicketScan from "../screens/TicketMan/TicketScan";
import TicketmanTabNavigator from "./TicketmanTabNavigator";
import ScanHistory from "../screens/TicketMan/ScanHistory";

const Drawer = createDrawerNavigator();

const TicketManStack = () => {
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
          name="Home3"
          component={TicketmanTabNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="TicketScan"
          component={TicketScan}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="ios-pricetags" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="ScanHistory"
          title="Scan History"
          component={ScanHistory}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="ios-pricetags" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="NoticeBoard"
          component={NoticeBoard}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="notifications" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default TicketManStack;
