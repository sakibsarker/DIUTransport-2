import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/Profile";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import TabNavigator from "./TabNavigator";
import NoticeBoard from "../screens/NoticeBoard";
import Tickets from "../screens/Tickets";

const Drawer = createDrawerNavigator();
const AppStack = () => {
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
          component={TabNavigator}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tickets"
          component={Tickets}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="ios-pricetags" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Notice Board"
          component={NoticeBoard}
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="notifications" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Settings"
          component={Profile}
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

export default AppStack;
