import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { useTheme, Text, List, Surface } from "react-native-paper";

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
                ticketId: "surjomukhi5_Sunday_10_Jul_8:03:31_PM_201-15-3117",
                value: "25 Taka",
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
                ticketId: "surjomukhi5_35_Sunday_10_Jul_8:03:31_PM_201-15-3117",
                value: "35 Taka",
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
                ticketId: "surjomukhi5_50_Sunday_10_Jul_8:03:31_PM_201-15-3117",
                value: "50 Taka",
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
