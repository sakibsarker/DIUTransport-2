import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const SelectPayment = ({ navigation }) => {
  return (
    <View style={{}}>
      <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
        <Button>1: BKash</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
        <Button>2: OneCard</Button>
      </TouchableOpacity>
    </View>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({});
