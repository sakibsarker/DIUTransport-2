import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, useTheme, Text } from "react-native-paper";

const TicketMan = ({ navigation }) => {
  const theme = useTheme();
  const [TicketManId, setTicketManId] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log(TicketManId, password);
    navigation.replace("HomeTicketMan");
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
          placeholder="TicketMan ID"
          value={TicketManId}
          onChangeText={setTicketManId}
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

export default TicketMan;
