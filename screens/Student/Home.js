import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import SearchBar from "../../components/Home/SearchBar";
import { useTheme, Divider, Button, Text } from "react-native-paper";
import RouteList from "../../components/Home/RouteList";
import RecentTickets from "../../components/Home/RecentTickets";

const Home = ({ navigation }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: theme?.colors.backcolor,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ImageBackground
        source={require("../../assets/images/diubanner.jpg")}
        style={{ padding: 60 }}
      />
      <ScrollView>
        <SafeAreaView>
          <SearchBar />
          <Divider style={{ marginBottom: 40 }} />
          <View style={styles.container}>
            <Text style={{ fontWeight: "bold" }}>All Transports</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Routes")}>
              <Text
                style={{
                  backgroundColor: theme?.colors.accent,
                  color: theme.colors.White,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 15,
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <Divider />

          <View style={styles.container}>
            <RouteList navigation={navigation} />
          </View>

          <Divider />
          <View style={styles.container}>
            <Text style={{ fontWeight: "bold" }}>Your Last Ticket</Text>
          </View>
          <Divider />

          <View style={styles.container}>
            <RecentTickets navigation={navigation} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 15,
  },
});

export default Home;
