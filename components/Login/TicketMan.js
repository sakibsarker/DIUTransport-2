import { View, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Button, useTheme, Text, Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loginEmployee } from "../../redux/ApiCalls/user";
import Icon from "react-native-vector-icons/Ionicons";
import Loader from "../Loader";

const TicketMan = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.user);

  const [TicketManId, setTicketManId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = () => {
    dispatch(loginEmployee({ employeeId: TicketManId, password }));
    if (loading) {
      console.log("Loading..");
    } else if (error) {
      Alert.alert("Error!", error);
    } else if (!loading && user) {
      console.log(user);
      navigation.replace("TicketManStack", { user });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={{ backgroundColor: theme.colors.White }}>
      <View style={Styles.field}>
        <TextInput
          name="employeeId"
          style={Styles.input}
          placeholder="TicketMan ID"
          value={TicketManId}
          onChangeText={setTicketManId}
          keyboardType="number-pad"
        />
      </View>
      <View style={Styles.field}>
        <TextInput
          secureTextEntry={!showPassword}
          style={Styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Icon
          onPress={() => setShowPassword(!showPassword)}
          style={Styles.eye}
          name={showPassword ? "md-eye" : "md-eye-off"}
        />
      </View>

      <Button
        disabled={!TicketManId || !password}
        style={{ ...Styles.btn, backgroundColor: theme?.colors.accent }}
        onPress={loginHandler}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </Button>
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 15,
  },

  btn: {
    padding: 5,
    marginBottom: 25,
  },
  eye: {
    position: "absolute",
    right: 0,
    bottom: 23,
    fontSize: 25,
    paddingRight: 15,
  },
  field: {
    paddingVertical: 14,
    position: "relative",
  },
});

export default TicketMan;
