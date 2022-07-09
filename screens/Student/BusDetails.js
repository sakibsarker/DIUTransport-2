import { View, SafeAreaView } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const BusDetails = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text>BusDetails of {route.params?.busId}</Text>
      </SafeAreaView>
    </View>
  );
};

export default BusDetails;
