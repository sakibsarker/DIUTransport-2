import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

const Notice = ({ navigation, props }) => {
  const theme = useTheme();
  const { id, noticeMessage, description, posted, read } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NoticeDetails")}
      style={{
        backgroundColor: read ? theme.colors.cardToggle : theme.colors.purple,
        paddingVertical: 20,
        paddingHorizontal: 25,
        margin: 15,
        borderRadius: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name="bell" size={25} color={theme.colors.accent} />
        <View style={{ paddingHorizontal: 20 }}>
          <Text>{noticeMessage}</Text>
          <Text>{description}</Text>
          <Text>{posted}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Notice;
