import React from "react";
import {
  View,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";

import SearchBar from "../../components/Home/SearchBar";
import { useTheme, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Home/Menu";
import { GreetingsToUser } from "greetingstouser";
import { useSelector } from "react-redux";
import { NameFormat } from "../../Utils/NameFormat";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
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
      description: "Used Tickets",
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
      name: "FAQ",
      description: "Frequently Asked",
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
      <ImageBackground
        source={require("../../assets/images/diubanner.jpg")}
        style={{ padding: 60 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
          paddingVertical: 40,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            Hi {user && NameFormat(user?.name)}
          </Text>
          <Text>{GreetingsToUser(new Date(), { showName: false })}!</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Icon
              style={{
                borderRadius: 15,
              }}
              name="notifications"
              color={theme.colors.text}
              size={40}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* 
      <View>
        <SearchBar />
      </View> */}

      <FlatList
        data={menuData}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", padding: 25 }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
