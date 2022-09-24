import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme, Text, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/Reducers/scanQueuee";
import { SwipeListView } from "react-native-swipe-list-view";
import ScanHistoryItem from "../../components/ScanHistory/ScanHistoryItem";

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
        <View style={styles.page}>
          <View style={{ ...styles.justifySBTN, marginBottom: 20 }}>
            <Text>Tickets</Text>
            <Text style={{ color: theme.colors.accent }}>
              Total Students - {count}
            </Text>
          </View>
          {queuee.length > 0 ? (
            <SwipeListView
              data={queuee}
              renderItem={(data, rowMap) => <ScanHistoryItem qi={data.item} />}
              renderHiddenItem={(data, rowMap) => (
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    borderRadius: 25,
                    marginTop: -15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        "Confirmation",
                        "Are you sure want to delete ?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: () =>
                              dispatch(removeItem(data.item["id"])),
                          },
                        ]
                      );
                    }}
                    style={{
                      backgroundColor: theme.colors.notification,
                      padding: 25,
                      borderRadius: 15,
                    }}
                  >
                    <Text
                      style={{
                        color: theme.colors.cardToggle,
                      }}
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={0}
              rightOpenValue={-100}
            />
          ) : (
            <Text
              style={{
                textAlign: "center",
                marginVertical: 20,
                backgroundColor: theme.colors.disabled,
              }}
            >
              No Ticket Sales
            </Text>
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
