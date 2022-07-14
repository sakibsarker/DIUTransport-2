import { Alert } from "react-native";
import { useTheme } from "react-native-paper";
import React, { useState } from "react";
import AuthStack from "./AuthStack";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const root = () => {
  const { token, userType } = useSelector((state) => state.user);

  console.log(token);

  if (token == null && (userType != "student" || userType != "employee")) {
    return <AuthStack />;
  } else {
    if (userType && userType == "student") {
      return <StudentStack />;
    } else if (userType == "employee") {
      return <TicketManStack />;
    }
  }
};

export default root;
