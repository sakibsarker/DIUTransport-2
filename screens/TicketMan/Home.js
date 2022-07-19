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
        source={require("../../assets/images/diubanner.jpg")}
        style={{ padding: 60 }}
      />
      <SafeAreaView>
        <SearchBar />
        <View style={styles.container}>
          <Text>Latest Scans</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.col2(theme.colors.surface)}>
            <Text>201-15-3117</Text>
            <Text style={{ color: theme?.colors.success }}>+50</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.container}>
          <TouchableOpacity style={styles.col2(theme.colors.surface)}>
            <Text>201-15-3442</Text>
            <Text style={{ color: theme?.colors.success }}>+25</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.container}>
          <TouchableOpacity style={styles.col2(theme.colors.surface)}>
            <Text>201-15-3470</Text>
            <Text style={{ color: theme?.colors.success }}>+35</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.container}>
          <TouchableOpacity style={styles.col2(theme.colors.surface)}>
            <Text>201-15-3126</Text>
            <Text style={{ color: theme?.colors.success }}>+25</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.container}>
          <TouchableOpacity style={styles.col2(theme.colors.surface)}>
            <Text>201-15-3442</Text>
            <Text style={{ color: theme?.colors.success }}>+20</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.centerCol}>
            <Text
              style={{
                backgroundColor: theme.colors.btnToggle,
                color: theme.colors.White,
                padding: 15,
              }}
            >
              Tap To View More
            </Text>
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
  },
  col2: (surfaceColor) => ({
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: surfaceColor,
    padding: 25,
  }),
  centerCol: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
});

export default Home;
