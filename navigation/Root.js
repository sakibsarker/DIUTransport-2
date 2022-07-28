import { Alert } from "react-native";
import { useTheme } from "react-native-paper";
import React, { useEffect, useState } from "react";
import AuthStack from "./AuthStack";
import StudentStack from "./StudentStack";
import TicketManStack from "./TicketManStack";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { employeeProfile, studentProfile } from "../redux/ApiCalls/user";
import { clearErrors } from "../redux/Reducers/user";

const root = () => {
  const dispatch = useDispatch();
  const { token, userType, error } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (userType && token && userType == "employee") {
      dispatch(employeeProfile({ token: token && token }));
      if (error) {
        Alert.alert("Error", error);
      }
      dispatch(clearErrors());
    } else if (token && userType && userType == "student") {
      dispatch(studentProfile());

      dispatch(clearErrors());
    }
  }, [dispatch]);

  if (token == null || userType == null) {
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
