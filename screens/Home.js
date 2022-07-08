import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";

import SearchBar from "../components/Home/SearchBar";
import { useTheme, Divider, Button, Text } from "react-native-paper";
import RouteList from "../components/Home/RouteList";

const Home = ({ navigation }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ImageBackground
        source={require("../assets/images/dark-map.jpeg")}
        style={{ padding: 60 }}
      />
      <SafeAreaView>
        <SearchBar />
        <View style={styles.container}>
          <Text style={styles.col2}>All Transports</Text>
          <Button style={styles.col2}>
            <Text style={{ color: theme?.colors.accent }}>View All</Text>
          </Button>
        </View>
        <Divider />
        <RouteList navigation={navigation} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 15,
    paddingLeft: 25,
  },
  col2: {
    width: "50%",
  },
});

export default Home;
