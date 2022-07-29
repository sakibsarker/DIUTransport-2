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

const Settings = ({ navigation }) => {
  const theme = useTheme();
  const accountSettingsData = [
    {
      id: 1,
      icon: "user",
      title: "Profile",
      link: "Account",
    },
    {
      id: 2,
      icon: "receipt",
      title: "Preferences",
      link: "Account",
    },
  ];

  const contactDetailsData = [
    {
      id: 1,
      icon: "phone",
      title: "Phone",
      link: "Account",
    },
    {
      id: 2,
      icon: "address-card",
      title: "Address",
      link: "Account",
    },
  ];

  const signOutData = [
    {
      id: 1,
      icon: "envelope",
      title: "Sign-Out",
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
