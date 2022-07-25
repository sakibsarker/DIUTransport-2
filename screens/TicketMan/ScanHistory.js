import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme, Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/Reducers/scanQueuee";

const ScanHistory = ({ navigation }) => {
  const { q: queuee, count } = useSelector((state) => state.scanQueuee);

  const dispatch = useDispatch();

  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <ScrollView>
          <View style={styles.page}>
            <View style={{ ...styles.justifySBTN, marginBottom: 20 }}>
              <Text>History</Text>
              <Text style={{ color: theme.colors.accent }}>
                Total Students - {count}
              </Text>
            </View>
            {queuee.length > 0 ? (
              queuee.map((qi) => (
                <TouchableOpacity
                  key={qi["id"]}
                  onLongPress={() => dispatch(removeItem(qi["id"]))}
                >
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
              ))
            ) : (
              <Text>Empty Queuee</Text>
            )}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.cardToggle,
                  borderRadius: 40,
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                }}
              >
                <Button color={theme.colors.text}>Sync</Button>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ScanHistory;

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
