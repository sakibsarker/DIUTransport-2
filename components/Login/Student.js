import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const Student = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Only University Email is allowed</Text>
      <TouchableOpacity onPress={() => navigation.replace("StudentStack")}>
        <Image
          source={{
            uri: "https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png",
            width: 273,
            height: 70,
            resizeMode: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Student;
