import { Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import StudentStack from './StudentStack';
import TicketManStack from './TicketManStack';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { employeeProfile } from '../redux/ApiCalls/user';

const root = () => {
  const dispatch = useDispatch();
  const { token, userType, error } = useSelector((state) => state.user);

  React.useEffect(() => {
    //console.log(token);
    dispatch(employeeProfile({ token: token && token }));
  }, [dispatch]);

  if (token == null && userType == null) {
    return <AuthStack />;
  } else {
    if (userType && userType == 'student') {
      return <StudentStack />;
    } else if (userType == 'employee') {
      return <TicketManStack />;
    }
  }
};

export default root;
