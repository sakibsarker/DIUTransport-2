import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../../screens/Student/Settings/Settings";
import ProfileStack from "../Profile/ProfileStack";
const Stack = createNativeStackNavigator();
const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settingss"
        component={Settings}
        options={{ title: "Settings" }}
      />

      <Stack.Screen name="Account" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
