import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import Home from "../screens/TicketMan/Home";
import MyMap from "../screens/Student/MyMap";
import TicketScan from "../screens/TicketMan/TicketScan";
import Profile from "../screens/TicketMan/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TicketmanTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.accent },
        tabBarInactiveTintColor: theme.colors.tabInactiveColor,
        tabBarActiveTintColor: theme.colors.tabActiveColor,
      }}
    >
      <Tab.Screen
        name="Home4"
        component={Home}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="ticketScan"
        component={TicketScan}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="map"
        component={MyMap}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: theme.colors.accent,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  if (routeName == "Home" || routeName == "Feed") {
    return "flex";
  }
  return "none";
};

export default TicketmanTabNavigator;
