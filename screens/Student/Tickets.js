import { View, SafeAreaView,StatusBar } from "react-native";

import React from "react";
import { useTheme, Text, List, Surface } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";
const Tickets = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text>Tickets</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Surface elevation={4} style={{ marginRight: 50 }}>
            <QRCode value="Hi!!!" />
          </Surface>
          <Surface elevation={4}>
            <QRCode value="secret super duper secret token right here!" />
          </Surface>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Tickets;
