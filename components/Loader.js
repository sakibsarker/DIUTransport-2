import { View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "react-native-paper";

const Loader = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme?.colors.surface,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        animating={true}
        size={25}
        color={theme?.colors.primary}
      />
    </View>
  );
};

export default Loader;
