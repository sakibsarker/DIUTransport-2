import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ScanHistoryItem = ({ qi }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity key={qi["id"]}>
      <View
        style={{
          ...styles.justifySBTN,
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 15,
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold" }}>{qi["id"]}</Text>
        </View>
        <View style={styles.justifySBTNCol}>
          <Text style={{ marginBottom: 5 }}>09:00 AM</Text>
          <View
            style={{
              borderRadius: 40,
              paddingHorizontal: 10,
              paddingVertical: 3,
              backgroundColor: theme.colors.accentToggle,
            }}
          >
            <Text
              style={{
                color: theme.colors.cardToggle,
              }}
            >
              Time
            </Text>
          </View>
        </View>
        <View style={styles.justifySBTNCol}>
          <Text style={{ marginBottom: 5 }}>09:00 AM</Text>
          <View
            style={{
              backgroundColor: theme.colors.black,
              borderRadius: 40,
              paddingHorizontal: 10,
              paddingVertical: 3,
            }}
          >
            <Text
              style={{
                color: theme.colors.White,
              }}
            >
              Route
            </Text>
          </View>
        </View>
        <View>
          <Icon
            name="checkbox-blank-circle"
            size={25}
            color={theme.colors.green}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  justifySBTN: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  justifySBTNCol: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ScanHistoryItem;
