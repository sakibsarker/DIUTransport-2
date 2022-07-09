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
          <Text style={styles.col2}>How to Scan?</Text>
          <TouchableOpacity style={styles.col2}>
            <Text style={{ color: theme?.colors.accent }}>View All</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={styles.col2}>When To Go?</Text>
          <TouchableOpacity style={styles.col2}>
            <Text style={{ color: theme?.colors.accent }}>View All</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={styles.col2}>How it works?</Text>
          <TouchableOpacity style={styles.col2}>
            <Text style={{ color: theme?.colors.accent }}>View All</Text>
          </TouchableOpacity>
        </View>
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
