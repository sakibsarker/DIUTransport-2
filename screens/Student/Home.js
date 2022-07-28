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
  FlatList,
} from "react-native";

import SearchBar from "../../components/Home/SearchBar";
import { useTheme, Divider, Button, Text } from "react-native-paper";
import RouteList from "../../components/Home/RouteList";
import RecentTickets from "../../components/Home/RecentTickets";
import Icon from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Home/Menu";
import { GreetingsToUser } from "greetingstouser";
import { useSelector } from "react-redux";
import { NameFormat } from "../../Utils/NameFormat";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const theme = useTheme();

  const menuData = [
    {
      id: 1,
      color: theme.colors.yellow,
      backgroundColor: theme.colors.purple,
      name: "Routes",
      description: "All Routes",
      icon: "bus",
      toRoute: "Routes",
    },
    {
      id: 2,
      color: theme.colors.purple,
      backgroundColor: theme.colors.gray,
      name: "Recent",
      description: "Recent Journies",
      icon: "history",
      toRoute: "THistory",
    },
    {
      id: 3,
      color: theme.colors.primary,
      backgroundColor: theme.colors.yellow,
      name: "Tickets",
      description: "Your Tickets",
      icon: "ticket-alt",
      toRoute: "Tickets",
    },
    {
      id: 4,
      color: theme.colors.red,
      backgroundColor: theme.colors.red,
      name: "Help",
      description: "Ask for Help",
      icon: "hands-helping",
      toRoute: "Help",
    },
  ];

  const renderItem = ({ item }) => (
    <Menu props={item} navigation={navigation} />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.backcolor,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <ImageBackground
          source={require("../../assets/images/diubanner.jpg")}
          style={{ padding: 40 }}
        />
        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              Hello {NameFormat(user?.displayName)}
            </Text>
            <Text>{GreetingsToUser(new Date(), { showName: false })}!</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icon
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 15,
              }}
              name="notifications"
              color={theme.colors.accent}
              size={40}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingHorizontal: 25,
            backgroundColor: theme.colors.gray,
          }}
        >
          <SearchBar />
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          <FlatList
            data={menuData}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
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
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
});

export default Home;
