import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme, Text, Surface, Divider } from "react-native-paper";

const History = ({ navigation, props }) => {
  const theme = useTheme();
  const { time, id, date, busName, price, route } = props;
  return (
    <Surface
      style={{
        ...styles.ticket,
        backgroundColor: theme.colors.cardToggle,
      }}
    >
      <View style={styles.date}>
        <Text style={{ marginBottom: 5, fontWeight: "bold" }}>{busName}</Text>
        <Text>{date}</Text>
      </View>
      <Divider style={{ marginBottom: 15 }} />
      <View style={styles.timestus}>
        <Text style={styles.tilocationname1}>Route: </Text>
        <Text>{route}</Text>
      </View>
      <View style={styles.timestus}>
        <Text style={styles.tilocationname1}>Time: </Text>
        <Text>{time}</Text>
      </View>
      <View style={styles.timestus}>
        <Text style={styles.tilocationname1}>Price: </Text>
        <Text>{price}</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("BusDetails", {
            busId: "surjomukhi22",
            routeId: "রাস্তা ৪",
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
  );
};

export default History;

const styles = StyleSheet.create({
  date: {
    alignItems: "center",
    paddingBottom: 15,
  },
  ticket: {
    padding: 20,
    marginVertical: 15,
    borderRadius: 15,
  },
  timestus: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
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
