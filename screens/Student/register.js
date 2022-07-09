import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, useTheme, Text } from "react-native-paper";

const Register = ({ navigation }) => {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = () => {
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);

    console.log(myForm);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ width: "70%" }}>
        <TextInput
          style={Styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={Styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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
        disabled={!email || !password || !name}
        style={{ ...Styles.btn, backgroundColor: theme?.colors.accent }}
        onPress={registerHandler}
      >
        <Text style={{ color: "#fff" }}>Register</Text>
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text
          style={{
            color: theme?.colors.accent,
            height: 30,
            margin: 20,
          }}
        >
          Have an Account, Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
  },
});
