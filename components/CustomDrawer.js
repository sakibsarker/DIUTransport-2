import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme, Text, Switch } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { PreferencesContext } from "../contexts/PreferencesContext ";

const CustomDrawer = (props) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: theme.colors.background }}
      >
        <ImageBackground
          source={require("../assets/images/dark-bg.webp")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            SR Joy
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",

                marginRight: 5,
              }}
            >
              5 Tickets
            </Text>
            <FontAwesome5 name="coins" size={14} color={"#FFFFFF"} />
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.surface,
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <View
          style={{
            padding: 5,
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text>Preferences</Text>
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 17,
          }}
        >
          <Switch
            onChange={() => toggleTheme()}
            style={[{ color: theme.colors.accent }]}
            color={theme.colors.accent}
            value={isThemeDark}
          />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={theme.colors.text}
            />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color={theme.colors.text} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
