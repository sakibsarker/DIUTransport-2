import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import MyMap from "../screens/MyMap";
import Profile from "../screens/Profile";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "react-native-paper";
import TabNavigator from "./TabNavigator";
import NoticeBoard from "../screens/NoticeBoard";

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
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tickets"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="ticket" size={14} color="#fff" />
            ),
          }}
        />

        <Drawer.Screen
          name="Notice Board"
          component={NoticeBoard}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="notifications" size={22} color={color} />
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
