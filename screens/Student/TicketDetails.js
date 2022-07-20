import { View, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import { useTheme, Text, List, Surface } from "react-native-paper";

const TicketDetails = ({ route }) => {
  const theme = useTheme();
  console.log(route.params);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Surface elevation={4}>
        <QRCode value={route.params?.value} size={250} />
        <Text style={{ textAlign: "center", marginTop: 20 }}>50 BDT</Text>
      </Surface>
    </View>
  );
};

export default TicketDetails;
