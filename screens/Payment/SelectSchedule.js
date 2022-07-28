import { FlatList, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import Schedule from "../../components/Bus/Schedule";

const SelectSchedule = ({ navigation }) => {
  const theme = useTheme();

  const scheduleData = [
    {
      id: 1,
      time: "7:00 AM",
    },
    {
      id: 2,
      time: "2:45 PM",
    },
    {
      id: 3,
      time: "5:20 PM",
    },
  ];

  const renderItem = ({ item }) => (
    <Schedule props={item} navigation={navigation} />
  );

  return (
    <View>
      <FlatList
        data={scheduleData}
        numColumns={1}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SelectSchedule;
