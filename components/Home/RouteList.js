import React from "react";
import { List, useTheme, Surface, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const RouteList = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Surface
        style={{ ...styles.item, backgroundColor: theme.colors.cardToggle }}
        elevation={5}
      >
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ১" })
          }
          key="1"
          description="Baipayl"
          title={(props) => (
            <>
              <Text>DSC</Text>
              <MaterialIcons
                size={20}
                color={theme.colors.White}
                {...props}
                name="alt-route"
              />
            </>
          )}
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface
        style={{ ...styles.item, backgroundColor: theme.colors.cardToggle }}
      >
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৩" })
          }
          key="3"
          description="Dhanmondi"
          title={(props) => (
            <>
              <Text>DSC</Text>
              <MaterialIcons
                size={20}
                color={theme.colors.White}
                {...props}
                name="alt-route"
              />
            </>
          )}
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface
        style={{ ...styles.item, backgroundColor: theme.colors.cardToggle }}
      >
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          description="Dhamrai"
          title={(props) => (
            <>
              <Text>DSC</Text>
              <MaterialIcons
                size={20}
                color={theme.colors.White}
                {...props}
                name="alt-route"
              />
            </>
          )}
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface
        style={{ ...styles.item, backgroundColor: theme.colors.cardToggle }}
      >
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          description="Uttara"
          title={(props) => (
            <>
              <Text>DSC</Text>
              <MaterialIcons
                size={20}
                color={theme.colors.White}
                {...props}
                name="alt-route"
              />
            </>
          )}
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface
        style={{ ...styles.item, backgroundColor: theme.colors.cardToggle }}
      >
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          description="Kashimpur"
          title={(props) => (
            <>
              <Text>DSC</Text>
              <MaterialIcons
                size={20}
                color={theme.colors.White}
                {...props}
                name="alt-route"
              />
            </>
          )}
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface
        style={{ ...styles.item, backgroundColor: theme.colors.cardToggle }}
      >
        <List.Item
          onPress={() =>
            navigation.navigate("BusList", { routeId: "রাস্তা ৪" })
          }
          key="4"
          description="Narayanganj"
          title={(props) => (
            <>
              <Text>DSC</Text>
              <MaterialIcons
                size={20}
                color={theme.colors.White}
                {...props}
                name="alt-route"
              />
            </>
          )}
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
    marginBottom: 15,
  },
});

export default RouteList;
