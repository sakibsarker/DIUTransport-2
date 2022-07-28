import React from "react";
import { List, useTheme, Surface, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Route from "../Route/Route";

const RouteList = ({ navigation, route }) => {
  const routeData = [
    {
      id: 1,
      routeId: "R1",
      startTimes: ["7:00 AM", "9:00 AM", "12:00 PM", "2:30 PM"],
      routeName: "Dhanmondi 🚥  DSC",
      routeDetails:
        "Dhanmondi - Sobhanbag <> Shyamoli Square <> Technical Mor > Majar Road Gabtoli <> Konabari Bus Stop <> Eastern Housing Rup Nogor <> Birulia Bus Stand <> Daffodil Smart City",
      departureTimes: ["1:45 AM", "3:00 PM", "4:30 PM", "5:45 PM"],
      image: "https://i.ibb.co/wKBxXz4/r1.png",
    },
    {
      id: 2,
      routeId: "R2",
      startTimes: ["7:00 AM", "9:00 AM", "2:15 PM"],
      routeName: "Uttara - Rajlokkhi 🚥  DSC",
      routeDetails:
        "Uttara - Rajlokkhi <> House building <> Grand Zomzom Tower <>  Diyabari Bridge <> Beribadh <> Birulia <> Khagan <> Daffodil Smart City",
      departureTimes: ["1:45 AM", "4:30 PM", "5:45 PM"],
      image: "https://i.ibb.co/hZqBXzV/r2.png",
    },
    {
      id: 3,
      routeId: "R3",
      startTimes: ["7:00 AM", "9:00 AM", "2:15 PM"],
      routeName: "Tongi College Gate 🚥  DSC",
      routeDetails:
        "Dhanmondi - Sobhanbag <> Shyamoli Square <> Technical Mor > Majar Road Gabtoli <> Konabari Bus Stop <> Eastern Housing Rup Nogor <> Birulia Bus Stand <> Daffodil Smart City",
      departureTimes: ["1:45 AM", "4:30 PM", "5:45 PM"],
      image: "https://i.ibb.co/KrBSgGZ/r3.png",
    },
  ];

  const renderItem = ({ item }) => (
    <Route props={item} navigation={navigation} />
  );

  const theme = useTheme();
  return (
    <View style={styles.container}>
      <FlatList
        data={routeData}
        numColumns={1}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* <Surface
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
          left={(props) => (
            <List.Icon {...props} icon="bus" style={{ marginRight: 0 }} />
          )}
        />
      </Surface> */}
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
    width: "46%",
    margin: "2%",
    marginBottom: 15,
    borderRadius: 15,
  },
});

export default RouteList;
