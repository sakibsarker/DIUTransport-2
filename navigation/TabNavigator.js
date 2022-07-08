import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MyMap from "../screens/MyMap";
import Profile from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "react-native-paper";
import NoticeBoard from "../screens/NoticeBoard";
import BusDetails from "../screens/BusDetails";
import BusList from "../components/Home/BusList";

const Tab = createBottomTabNavigator();
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
        name="BusDetails"
        component={BusDetails}
        options={({ route }) => ({
          title: route.params?.busId,
        })}
      />
      <Stack.Screen
        name="BusList"
        component={BusList}
        options={({ route }) => ({
          title: route.params?.routeId,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.accent },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="mymap"
        component={MyMap}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notices"
        component={NoticeBoard}
        options={{
          tabBarBadge: 7,
          tabBarBadgeStyle: { backgroundColor: "tomato" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile2"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
