import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "react-native-paper";
import StudentTabNavigator from "./StudentTabNavigator";
import Settings from "../screens/Student/Settings";

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
