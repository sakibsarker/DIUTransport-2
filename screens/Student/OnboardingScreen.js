import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("SignIn")}
      onDone={() => navigation.navigate("SignIn")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/images/bus.png")} />,
          title: "DIU Smart Transport System",
          subtitle: "A New Way of Transportation in University",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              width={250}
              height={313}
              source={require("../../assets/images/onboarding-img1.png")}
            />
          ),
          title: "কিরে দোস্তো , বাস কই ???",
          subtitle: "Lets Find Out!",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              height={313}
              width={250}
              source={require("../../assets/images/onboarding-img2.png")}
            />
          ),
          title: "Lets Get Started!",
          subtitle: "Make Sure You Have an Account First",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
