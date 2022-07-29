import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme, Text, Switch } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { PreferencesContext } from "../contexts/PreferencesContext ";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Reducers/user";
import { NameFormat } from "../Utils/NameFormat";

const CustomDrawer = (props) => {
  const { user, userType } = useSelector((state) => state.user);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  const handleLogout = () => {
    dispatch(logout());
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "DIU Transport developers are the best!",
        url: "https://github.com/srj101/DIUTransport",
        title: "DIU Transport App",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(result.activityType);
        } else {
          // shared
          console.log(result);
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log(result.action);
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
          {user?.photoURL ? (
            <Image
              source={{ uri: user?.photoURL }}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
          ) : (
            <Image
              source={require("../assets/images/avatar.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
          )}
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Settings", {
                screen: "Profile",
              })
            }
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginBottom: 5,
              }}
            >
              {userType && userType === "student"
                ? NameFormat(user?.displayName)
                : NameFormat(user?.name)}
            </Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={onShare}
          >
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
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogout}
          style={{ paddingVertical: 15 }}
        >
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
