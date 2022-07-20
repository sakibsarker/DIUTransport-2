import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { useTheme, Text, List, Surface } from "react-native-paper";

const testToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESVUgU21hcnQgQ2l0eSIsImlhdCI6MTY1ODM0MjM2NywiZXhwIjoxNjg5ODc4MzY1LCJhdWQiOiJkYWZmb2RpbFRyYW5zcG9ydC5jb20iLCJzdWIiOiJzdXBwb3J0X3RyYW5zcG9ydEBkaXUuZWR1LmJkIiwiR2l2ZW5OYW1lIjoiU1IiLCJTdXJuYW1lIjoiSm95IiwiRW1haWwiOiJzYWtpYkBzYXJrYXIuY29tIiwiVGlja2V0UHJpY2UiOiIzNSJ9.9-JnJeFePf4OfakhkDNDbX-7leR0ObiGRlG43p-vB1k";
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
