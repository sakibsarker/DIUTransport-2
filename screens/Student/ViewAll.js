import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Text, useTheme } from "react-native-paper";

const ViewAll = () => {
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
        <Text>Sakib</Text>
      </SafeAreaView>
    </View>
  );
};

export default ViewAll;
