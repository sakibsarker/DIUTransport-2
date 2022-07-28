import React from "react";
import { List, useTheme, Surface, Text } from "react-native-paper";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Route from "../../components/Route/Route";

const ViewAll = ({ navigation, route }) => {
  const theme = useTheme();
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
      noOfBuses: 3,
      duration: "1 hr 9 min",
      distance: "22.6 km",
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
      noOfBuses: 5,
      duration: "41 min",
      distance: "14.8 km",
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
      noOfBuses: 2,
      duration: "1 hr 22 min",
      distance: "25.3 km",
    },
  ];
  const renderItem = ({ item }) => (
    <Route props={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={routeData}
        numColumns={1}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
});

export default ViewAll;
