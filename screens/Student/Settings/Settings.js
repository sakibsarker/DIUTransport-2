import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import Setting from "../../../components/Settings/Setting";
import SwitchSetting from "../../../components/Settings/SwitchSetting";

const Settings = ({ navigation }) => {
  const theme = useTheme();
  const accountSettingsData = [
    {
      id: 1,
      icon: "user",
      title: "Profile",
      link: "Account",
      showArrow: true,
    },
    {
      id: 2,
      icon: "unlock",
      title: "Change Password",
      link: "Account",
      showArrow: true,
    },
    {
      id: 3,
      icon: "heart",
      title: "Favourites",
      link: "Account",
      showArrow: true,
    },
  ];

  const contactDetailsData = [
    {
      id: 1,
      icon: "phone",
      title: "Phone",
      link: "Account",
      showArrow: true,
    },
    {
      id: 2,
      icon: "address-card",
      title: "Address",
      link: "Account",
      showArrow: true,
    },
  ];

  const signOutData = [
    {
      id: 1,
      icon: "sign-out-alt",
      title: "Sign-Out",
      link: "Sign-Out",
      showArrow: false,
    },
  ];

  const preferencesData = [
    {
      id: 1,
      icon: "moon",
      title: "Dark Mode",
      link: "Account",
    },
  ];

  const ListHeader = ({ title }) => {
    return (
      <View style={{ paddingHorizontal: 25, marginBottom: 15 }}>
        <Text>{title}</Text>
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <Setting props={item} navigation={navigation} />
  );
  const renderSwitchItem = ({ item }) => (
    <SwitchSetting props={item} navigation={navigation} />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <View style={{ marginVertical: 30 }}>
          <FlatList
            ListHeaderComponent={<ListHeader title="Account Settings" />}
            data={accountSettingsData}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ marginVertical: 30 }}>
          <FlatList
            ListHeaderComponent={<ListHeader title="Contact Details" />}
            data={contactDetailsData}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={{ marginVertical: 30 }}>
          <FlatList
            ListHeaderComponent={<ListHeader title="Preferences" />}
            data={preferencesData}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderSwitchItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={{ marginVertical: 30 }}>
          <FlatList
            ListHeaderComponent={<ListHeader title="Sign Out" />}
            data={signOutData}
            numColumns={1}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Settings;
