import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import AuthStack from "./AuthStack";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";

const root = () => {
  const [token, setToken] = React.useState(null);
  const [userType, setUserType] = React.useState("student");

  const theme = useTheme();

  if (token == null) {
    return (
      <>
        <AuthStack />
      </>
    );
  } else {
    if (userType && userType == "student") {
      return <StudentStack />;
    } else if (userType && userType == "ticketman") {
      return <TicketManStack />;
    }
  }
};

export default root;
