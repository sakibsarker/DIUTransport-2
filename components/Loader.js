import { View } from "react-native";
import React from "react";
import { ActivityIndicator, Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { randomTip } from "../Utils/randomTip";

const Loader = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
        Did you know ?
      </Text>
      <Text style={{ marginHorizontal: 30, marginVertical: 25 }}>
        {randomTip()}
      </Text>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
