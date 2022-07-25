import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { useTheme, Text, List, Surface } from "react-native-paper";

const testToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg3NjE5MDMsImV4cCI6MTY5MDI5NzkwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJlbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJpZCI6IjIwMS0xNS0zMTE3In0.3lqSk1Wa1pFHTCm5sWxvwMr6AlT_qqZPUs03tn24tmU";
const testToken442 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg3NjE5MDMsImV4cCI6MTY5MDI5NzkwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJlbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJpZCI6IjIwMS0xNS0zNDQyIn0.IKvbEXvaj5se86jYtlGDqusCHfFRenXJp19NOgWpzp8";
const testTokenInValid =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg3NjE5MDMsImV4cCI6MTY5MDI5NzkwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJlbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJpZCI6IjIwMS0xNS0zNDQyIn0.4yEejEBMRx2i2G6g2F4JW7Z6BXoHQh4cp-SfQSrXt3g";
const testToken2 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESVUgU21hcnQgQ2l0eSIsImlhdCI6MTY1ODM0MjM2NywiZXhwIjoxNjg5ODc4MzY1LCJhdWQiOiJkYWZmb2RpbFRyYW5zcG9ydC5jb20iLCJzdWIiOiJzdXBwb3J0X3RyYW5zcG9ydEBkaXUuZWR1LmJkIiwiR2l2ZW5OYW1lIjoiU1IiLCJTdXJuYW1lIjoiSm95IiwiRW1haWwiOiJzYWtpYkBzYXJrYXIuY29tIiwiVGlja2V0UHJpY2UiOiIzNSJ9.9-JnJeFePf4OfakhkDNDbX-7leR0ObiGRlG43p-vB1k";
const testToken1 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESVUgU21hcnQgQ2l0eSIsImlhdCI6MTY1ODc1OTMyOSwiZXhwIjoxNjkwMjk1MzI5LCJhdWQiOiJkYWZmb2RpbFRyYW5zcG9ydCIsInN1YiI6ImRhZmZvZGlsVHJhbnNwb3J0QHN1cHBydC5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiSm9obnkiLCJFbWFpbCI6Inllc0BwYXBhLmNvbSIsIlRpY2tldFByaWNlIjoiMjUifQ.tuuDttTMMXPyDsd2UtiL3vLKSqO-otwypdxqVGL-dts";
const Tickets = ({ navigation, route }) => {
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
        <Surface elevation={4}>
          <List.Item
            onPress={() =>
              navigation.navigate("TicketDetails", {
                ticketId: "201-15-3117____25",
                value: testToken,
              })
            }
            key="1"
            title="25 Taka"
            description="5 Left"
            left={(props) => <List.Icon {...props} icon="ticket" />}
          />
        </Surface>
        <Surface elevation={4}>
          <List.Item
            onPress={() =>
              navigation.navigate("TicketDetails", {
                ticketId: "201-15-3117____35",
                value: testToken,
              })
            }
            key="2"
            title="35 Taka"
            description="2 Left"
            left={(props) => <List.Icon {...props} icon="ticket" />}
          />
        </Surface>
        <Surface elevation={4}>
          <List.Item
            onPress={() =>
              navigation.navigate("TicketDetails", {
                ticketId: "201-15-3117____50",
                value: testToken,
              })
            }
            key="3"
            title="50 Taka"
            description="6 Left"
            left={(props) => <List.Icon {...props} icon="ticket" />}
          />
        </Surface>
      </SafeAreaView>
    </View>
  );
};

export default Tickets;
