import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useTheme, Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import JiggleDeleteView from "react-native-jiggle-delete-view";

const ScanHistory = ({ navigation }) => {
  const [a, setA] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ]);
  const theme = useTheme();
  const [showDeleteJiggle, setShowDeleteJiggle] = React.useState(false);
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
                Total Students - {a.length}
              </Text>
            </View>
            {a.map((aa) => (
              <TouchableOpacity
                onLongPress={() => setShowDeleteJiggle(!showDeleteJiggle)}
                onPress={() => setShowDeleteJiggle(false)}
                key={aa}
              >
                <JiggleDeleteView
                  showDeleteJiggle={showDeleteJiggle}
                  showDeletingAnimation={true}
                  onDelete={() => {
                    let s = a;
                    for (var i = 0; i < s.length; i++) {
                      if (s[i] === aa) {
                        s.splice(i, 1);
                      }
                    }
                    console.log(s);
                    setA(s);
                  }}
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
                      <Text style={{ fontWeight: "bold" }}>201-15-311{aa}</Text>
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
                </JiggleDeleteView>
              </TouchableOpacity>
            ))}
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
