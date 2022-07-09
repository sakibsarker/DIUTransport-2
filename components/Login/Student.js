import { View, Image } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const Student = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Only University Email is allowed</Text>
      <Image
        source={{
          uri: "https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png",
          width: 276,
          height: 70,
          resizeMode: "center",
        }}
      />
    </View>
  );
};

export default Student;
