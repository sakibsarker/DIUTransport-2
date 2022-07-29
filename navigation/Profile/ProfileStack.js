import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Student/Profile";

const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile7"
        component={Profile}
        options={{ headerShown: false, title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
