import { View, StatusBar, Platform, SafeAreaView } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
const NoticeBoard = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <Text>NoticeBoard: </Text>
        <Text>2 Number Nosto</Text>
        <Text>6 Number e agun lagse</Text>
        <Text>3 Number re 1 number lagay dise</Text>
        <Text>Kalke bus off</Text>
        <Text>New Schedule Updated</Text>
        <Text>Bhara barse!</Text>
      </SafeAreaView>
    </View>
  );
};

export default NoticeBoard;
