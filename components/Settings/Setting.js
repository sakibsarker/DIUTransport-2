import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";

const Setting = ({ navigation, props }) => {
  const theme = useTheme();
  const { id, icon, title, link } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(link)}
      style={{ ...styles.setting, backgroundColor: theme.colors.cardToggle }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name={icon} size={25} color={theme.colors.text} />
        <Text style={{ marginHorizontal: 25 }}>{title}</Text>
      </View>
      <Icon name="angle-right" />
    </TouchableOpacity>
  );
};

export default Setting;

const styles = StyleSheet.create({
  setting: {
    flexDirection: "row",
    elevation: 5,
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      width: -2,
      height: 2,
    },
  },
});
