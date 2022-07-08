import React from "react";
import { List, useTheme, Surface } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const RouteList = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Surface style={styles.item} elevation={5}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ১" })
          }
          key="1"
          title="রাস্তা ১"
          description="১"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৩" })
          }
          key="3"
          title="রাস্তা ৩"
          description="৩"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="রাস্তা ৪"
          description="৪"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="রাস্তা ৪"
          description="৪"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="রাস্তা ৪"
          description="৪"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="রাস্তা ৪"
          description="৪"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  item: {
    width: "50%",
    height: 70,
  },
});

export default RouteList;
