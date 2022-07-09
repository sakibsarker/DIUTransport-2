import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, useTheme, Text } from "react-native-paper";

const Employee = () => {
  const theme = useTheme();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log(employeeId, password);
  };

  return (
    <View
      style={{
        width: "80%",
      }}
    >
      <View>
        <TextInput
          style={Styles.input}
          placeholder="Employee ID"
          value={employeeId}
          onChangeText={setEmployeeId}
          keyboardType="number-pad"
        />

        <TextInput
          secureTextEntry
          style={Styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button
        disabled={!employeeId || !password}
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },

  btn: {
    padding: 5,
  },
});

export default Employee;
