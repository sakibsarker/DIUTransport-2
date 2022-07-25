import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useTheme, Surface, Text, Button, Divider } from "react-native-paper";

const TicketHistory = ({ navigation }) => {
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
          <View style={styles.body}>
            <Surface
              style={{
                ...styles.ticket,
                backgroundColor: theme.colors.cardToggle,
              }}
            >
              <View style={styles.date}>
                <Text style={{ marginBottom: 5, fontWeight: "bold" }}>
                  Surjomukhi 27
                </Text>
                <Text>19 June-2022</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginBottom: 15,
                    marginTop: 10,
                  }}
                >
                  25.00 TK
                </Text>
              </View>
              <Divider style={{ marginBottom: 15 }} />
              <View style={styles.timestus}>
                <View style={styles.tilocation}>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocationl1}>Location</Text>
                  <Text style={styles.too}>TO</Text>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocatiol2}>Location</Text>
                </View>
                <View style={styles.timing}>
                  <Text style={styles.timingt1}>04:00 PM</Text>
                  <Text style={styles.timingt2}>06:00 PM</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Home2", {
                    screen: "BusDetails",
                    params: {
                      busId: "surjomukhi22",
                      routeId: "রাস্তা ৪",
                    },
                  })
                }
                style={styles.buttn}
              >
                <Text
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.White,
                    paddingLeft: 20,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingTop: 10,
                    borderRadius: 5,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Buy Again
                </Text>
              </TouchableOpacity>
            </Surface>
            <Surface
              style={{
                ...styles.ticket,
                backgroundColor: theme.colors.cardToggle,
              }}
            >
              <View style={styles.date}>
                <Text style={{ marginBottom: 5, fontWeight: "bold" }}>
                  Surjomukhi 27
                </Text>
                <Text>19 June-2022</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginBottom: 15,
                    marginTop: 10,
                  }}
                >
                  25.00 TK
                </Text>
              </View>
              <Divider style={{ marginBottom: 15 }} />
              <View style={styles.timestus}>
                <View style={styles.tilocation}>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocationl1}>Location</Text>
                  <Text style={styles.too}>TO</Text>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocatiol2}>Location</Text>
                </View>
                <View style={styles.timing}>
                  <Text style={styles.timingt1}>04:00 PM</Text>
                  <Text style={styles.timingt2}>06:00 PM</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Home2", {
                    screen: "BusDetails",
                    params: {
                      busId: "surjomukhi22",
                      routeId: "রাস্তা ৪",
                    },
                  })
                }
                style={styles.buttn}
              >
                <Text
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.White,
                    paddingLeft: 20,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingTop: 10,
                    borderRadius: 5,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Buy Again
                </Text>
              </TouchableOpacity>
            </Surface>
            <Surface
              style={{
                ...styles.ticket,
                backgroundColor: theme.colors.cardToggle,
              }}
            >
              <View style={styles.date}>
                <Text style={{ marginBottom: 5, fontWeight: "bold" }}>
                  Surjomukhi 27
                </Text>
                <Text>19 June-2022</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginBottom: 15,
                    marginTop: 10,
                  }}
                >
                  25.00 TK
                </Text>
              </View>
              <Divider style={{ marginBottom: 15 }} />
              <View style={styles.timestus}>
                <View style={styles.tilocation}>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocationl1}>Location</Text>
                  <Text style={styles.too}>TO</Text>
                  <Text style={styles.tilocationname1}>Ashulia</Text>
                  <Text style={styles.tilocatiol2}>Location</Text>
                </View>
                <View style={styles.timing}>
                  <Text style={styles.timingt1}>04:00 PM</Text>
                  <Text style={styles.timingt2}>06:00 PM</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.buttn}
                onPress={() =>
                  navigation.navigate("Home2", {
                    screen: "BusDetails",
                    params: {
                      busId: "surjomukhi22",
                      routeId: "রাস্তা ৪",
                    },
                  })
                }
              >
                <Text
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.White,
                    paddingLeft: 20,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingTop: 10,
                    borderRadius: 5,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Buy Again
                </Text>
              </TouchableOpacity>
            </Surface>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  date: {
    alignItems: "center",
  },
  ticket: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  timestus: {
    flexDirection: "row",
    marginBottom: 10,
  },
  timing: {
    marginLeft: "40%",
  },
  too: {
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 20,
  },
  timingt2: {
    marginTop: 80,
  },
  timerm: {
    flexDirection: "row",
    marginBottom: 10,
  },
  busname: {
    marginLeft: 20,
  },
  buttn: {
    alignItems: "center",
  },
});
export default TicketHistory;
