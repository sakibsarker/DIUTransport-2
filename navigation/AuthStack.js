import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import OnboardingScreen from "../screens/Student/OnboardingScreen";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="onBoarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStudent"
          component={StudentStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTicketMan"
          component={TicketManStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
};

export default AuthStack;
