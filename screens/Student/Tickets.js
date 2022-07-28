import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import Ticket from "../../components/Tickets/Ticket";
import { useTheme, Text, List, Surface } from "react-native-paper";

const Tickets = ({ navigation, route }) => {
  const theme = useTheme();

  const ticketData = [
    {
      id: 1,
      price: 25.0,
      name: "SR Joy",
      paymentVia: "One Card",
      time: "7:45AM",
      date: "27 Jul 2022",
      busName: "🚌 Surjomukhi 1",
      busId: "surjomukhi22",
      destination: "Baipayl, Dhaka",
      backgroundColor: theme.colors.green,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg3NjE5MDMsImV4cCI6MTY5MDI5NzkwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJlbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJpZCI6IjIwMS0xNS0zMTE3In0.3lqSk1Wa1pFHTCm5sWxvwMr6AlT_qqZPUs03tn24tmU",
    },
    {
      id: 2,
      price: 35.0,
      name: "Sakib Sarkar",
      paymentVia: "Bkash",
      time: "2.45PM",
      date: "27 Jul 2022",
      busId: "surjomukhi10",
      busName: "🚌 Surjomukhi 8",
      destination: "Uttara, Dhaka",
      backgroundColor: theme.colors.green,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESVUgU21hcnQgQ2l0eSIsImlhdCI6MTY1ODM0MjM2NywiZXhwIjoxNjg5ODc4MzY1LCJhdWQiOiJkYWZmb2RpbFRyYW5zcG9ydC5jb20iLCJzdWIiOiJzdXBwb3J0X3RyYW5zcG9ydEBkaXUuZWR1LmJkIiwiR2l2ZW5OYW1lIjoiU1IiLCJTdXJuYW1lIjoiSm95IiwiRW1haWwiOiJzYWtpYkBzYXJrYXIuY29tIiwiVGlja2V0UHJpY2UiOiIzNSJ9.9-JnJeFePf4OfakhkDNDbX-7leR0ObiGRlG43p-vB1k",
    },
    {
      id: 3,
      price: 50.0,
      name: "Sheikh Foysal",
      paymentVia: "One Card",
      time: "5.20PM",
      date: "27 Jul 2022",
      busName: "🚌 Surjomukhi 7",
      busId: "surjomukhi10",
      destination: "Narayanganj, Dhaka",
      backgroundColor: theme.colors.green,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESVUgU21hcnQgQ2l0eSIsImlhdCI6MTY1ODc1OTMyOSwiZXhwIjoxNjkwMjk1MzI5LCJhdWQiOiJkYWZmb2RpbFRyYW5zcG9ydCIsInN1YiI6ImRhZmZvZGlsVHJhbnNwb3J0QHN1cHBydC5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiSm9obnkiLCJFbWFpbCI6Inllc0BwYXBhLmNvbSIsIlRpY2tldFByaWNlIjoiMjUifQ.tuuDttTMMXPyDsd2UtiL3vLKSqO-otwypdxqVGL-dts",
    },
    {
      id: 4,
      price: 25.0,
      name: "Sakir Hossain Faruqi",
      paymentVia: "One Card",
      time: "2.45PM",
      date: "27 Jul 2022",
      busName: "🚌 Surjomukhi 3",
      busId: "surjomukhi22",
      destination: "Dhanmondi, Dhaka",
      backgroundColor: theme.colors.green,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESVUgU21hcnQgQ2l0eSIsImlhdCI6MTY1ODc1OTMyOSwiZXhwIjoxNjkwMjk1MzI5LCJhdWQiOiJkYWZmb2RpbFRyYW5zcG9ydCIsInN1YiI6ImRhZmZvZGlsVHJhbnNwb3J0QHN1cHBydC5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiSm9obnkiLCJFbWFpbCI6Inllc0BwYXBhLmNvbSIsIlRpY2tldFByaWNlIjoiMjUifQ.tuuDttTMMXPyDsd2UtiL3vLKSqO-otwypdxqVGL-dts",
    },
  ];

  const renderItem = ({ item }) => (
    <Ticket props={item} navigation={navigation} />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <View style={{ paddingHorizontal: 25 }}>
          <FlatList
            data={ticketData}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Tickets;
