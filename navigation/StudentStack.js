import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/Student/Profile";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import StudentTabNavigator from "./StudentTabNavigator";
import NoticeBoard from "../screens/NoticeBoard";
import Tickets from "../screens/Student/Tickets";

const Drawer = createDrawerNavigator();
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

export default StudentStack;
