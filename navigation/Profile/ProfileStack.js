import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Student/Profile";
import UpdateProfile from "../../screens/Auth/UpdateProfile";
import Favourites from "../../screens/Student/Favourites";
import TicketStack from "../Ticket/TicketStack";
const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile7"
        component={Profile}
        options={{ headerShown: false, title: "Profile" }}
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

export default ProfileStack;
