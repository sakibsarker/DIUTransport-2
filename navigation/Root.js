import { Alert, View } from "react-native";
import React, { useEffect, useState } from "react";
import AuthStack from "./AuthStack";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";
import { Auth, Hub } from "aws-amplify";
import { ActivityIndicator } from "react-native-paper";

const root = () => {
  const [user, setUser] = useState(undefined);
  const [group, setGroup] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
      setGroup(authUser.signInUserSession.accessToken["cognito:groups"]);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (user) {
    if (group && group.includes("TicketChecker")) {
      return <TicketManStack />;
    } else {
      return <StudentStack />;
    }
  } else {
    return <AuthStack />;
  }
};

export default root;
