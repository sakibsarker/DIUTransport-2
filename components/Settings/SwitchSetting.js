import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme, Text, Switch } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { PreferencesContext } from "../../contexts/PreferencesContext ";

const SwitchSetting = ({ navigation, props }) => {
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  const theme = useTheme();
  const { icon, title } = props;
  return (
    <View
      style={{ ...styles.setting, backgroundColor: theme.colors.cardToggle }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name={icon} size={25} color={theme.colors.text} />
        <Text style={{ marginHorizontal: 25 }}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Switch
          onChange={() => toggleTheme()}
          style={[{ color: theme.colors.accent }]}
          color={theme.colors.accent}
          value={isThemeDark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SwitchSetting;

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
