import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../screens/Student/Home";
import MyMap from "../screens/Student/MyMap";
import Profile from "../screens/Student/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "react-native-paper";
import NoticeBoard from "../screens/Notice/NoticeBoard";
import RouteDetails from "../components/Home/RouteDetails";
import ViewAll from "../screens/Student/ViewAll";
import TicketHistory from "../screens/Student/TicketHistory";
import TicketDetails from "../screens/Student/TicketDetails";
import Tickets from "../screens/Student/Tickets";
import Help from "../screens/HelpPage/Help";
import UpdateProfile from "../screens/Auth/UpdateProfile";
import Favourites from "../screens/Student/Favourites";
import BusDetails from "../screens/Student/BusDetails";
import SelectSeat from "../screens/Payment/SelectSeat";
import SelectMethod from "../screens/Payment/SelectMethod";
import Confirmations from "../screens/Payment/Confirmations";
import PaymentProcess from "../screens/Payment/PaymentProcess";
import NoticeDetails from "../screens/Notice/NoticeDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="selectSeat" component={SelectSeat} />
      <Stack.Screen name="selectMethod" component={SelectMethod} />
      <Stack.Screen name="confirmation" component={Confirmations} />
      <Stack.Screen name="paymentProcess" component={PaymentProcess} />
    </Stack.Navigator>
  );
};

const NoticeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
      <Stack.Screen name="NoticeDetails" component={NoticeDetails} />
    </Stack.Navigator>
  );
};

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
        screenOptions={{ title: "Tickets", headerShown: false }}
        component={TicketStack}
      />
      <Stack.Screen name="Notifications" component={NoticeStack} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile7"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="updateProfile" component={UpdateProfile} />
      <Stack.Screen name="favourites" component={Favourites} />
      <Stack.Screen
        name="Tickets"
        component={TicketStack}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="ios-pricetags" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const TicketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tickets" component={Tickets} />
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

const StudentTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: {},
        tabBarStyle: {
          height: 40,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 15,
          display: getTabBarVisibility(route),
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: theme.colors.transparent,
        },
        tabBarInactiveTintColor: theme.colors.tabInactiveColor,
        tabBarActiveTintColor: theme.colors.tabActiveColor,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={focused ? 35 : 27}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Map"
        component={MyMap}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="map" size={focused ? 35 : 27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="YTickets"
        component={TicketStack}
        options={{
          title: "Your Tickets",
          tabBarBadge: 7,
          tabBarBadgeStyle: { backgroundColor: "tomato" },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="ticket-alt"
              size={focused ? 35 : 27}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="user" color={color} size={focused ? 35 : 27} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  console.log(routeName);
  if (routeName == "home" || routeName == "Feed" || routeName == "Profile7") {
    return "flex";
  }
  return "none";
};

export default StudentTabNavigator;
