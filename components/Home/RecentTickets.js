import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Surface, useTheme, Divider } from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const RecentTickets = ({ navigation }) => {
  const theme = useTheme();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("StuduentProfile", { screen: "TripHistory" })
        }
      >
        <Surface
          elevation={5}
          style={{
            padding: 35,
            marginLeft: 10,
            marginTop: 10,
            marginRight: 15,
            marginBottom: 15,
            borderRadius: 20,
            backgroundColor: theme.colors.cardToggle,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <EvilIcons name="calendar" size={25} color={theme.colors.text} />
            <Text style={{ marginLeft: 5 }}>18-Jun,2000</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <EvilIcons name="calendar" size={25} color={theme.colors.text} />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>25 TK</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <EvilIcons name="location" size={25} color={theme.colors.text} />
            <Text>Jamgora To DSC</Text>
          </View>
        </Surface>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RecentTickets;
