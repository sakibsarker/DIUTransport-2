import { View, StatusBar, Platform, SafeAreaView } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const Settings = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView>
        <Text>Settings</Text>
      </SafeAreaView>
    </View>
  );
};

export default Settings;
