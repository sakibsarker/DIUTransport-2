import React from "react";
import { List, useTheme, Surface } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
          title="DSC"
          description="Ashulia"
          left={(props) => (
            <MaterialIcons
              size={25}
              color={theme.colors.White}
              {...props}
              name="alt-route"
            />
          )}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৩" })
          }
          key="3"
          title="DSC"
          description="Dhanmondi"
          left={(props) => (
            <MaterialIcons
              size={25}
              color={theme.colors.White}
              {...props}
              name="alt-route"
            />
          )}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="DSC"
          description="Dhamrai"
          left={(props) => (
            <MaterialIcons
              size={25}
              color={theme.colors.White}
              {...props}
              name="alt-route"
            />
          )}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="DSC"
          description="Uttara"
          left={(props) => (
            <MaterialIcons
              size={25}
              color={theme.colors.White}
              {...props}
              name="alt-route"
            />
          )}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="DSC"
          description="Kashimpur"
          left={(props) => (
            <MaterialIcons
              size={25}
              color={theme.colors.White}
              {...props}
              name="alt-route"
            />
          )}
        />
      </Surface>
      <Surface style={styles.item}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          title="DSC"
          description="Narayanganj"
          left={(props) => (
            <MaterialIcons
              size={25}
              color={theme.colors.White}
              {...props}
              name="alt-route"
            />
          )}
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
