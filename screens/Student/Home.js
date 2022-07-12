import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import SearchBar from "../../components/Home/SearchBar";
import { useTheme, Divider, Button, Text } from "react-native-paper";
import RouteList from "../../components/Home/RouteList";

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
        source={require("../../assets/images/dark-map.jpeg")}
        style={{ padding: 60 }}
      />
      <SafeAreaView>
        <SearchBar />
        <View style={styles.container}>
          <Text>All Transports</Text>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: theme?.colors.accent,
                color: theme.colors.White,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 5,
                paddingBottom: 5,
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
      </SafeAreaView>
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
    paddingBottom: 25,
  },
});

export default Home;
