import { FlatList, View } from "react-native";
import { Divider, Text, useTheme } from "react-native-paper";
import React, { useEffect, useState } from "react";
import Schedule from "../../components/Bus/Schedule";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { PreferencesContext } from "../../contexts/PreferencesContext ";
import { checkTimeHasPassed } from "../../Utils/CheckTime";
import Icon from "react-native-vector-icons/FontAwesome5";

const SelectSchedule = ({ navigation }) => {
  const theme = useTheme();
  const { isThemeDark } = React.useContext(PreferencesContext);
  const [date, setDate] = React.useState(new Date());

  const [scheduleData, setScheduleData] = React.useState([
    {
      id: 1,
      time: "7:00 AM",
    },
    {
      id: 2,
      time: "11:45 PM",
    },
    {
      id: 3,
      time: "2:20 PM",
    },
    {
      id: 4,
      time: "9:20 PM",
    },
    {
      id: 5,
      time: "9:11 PM",
    },
  ]);

  const renderItem = ({ item }) => (
    <Schedule props={item} navigation={navigation} />
  );

  return (
    <View style={{ marginHorizontal: 25 }}>
      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="calendar-alt" color={theme.colors.text} size={25} />
        <RNDateTimePicker
          style={{ width: 134 }}
          onChange={(event, date) => {
            setDate(date);
            setScheduleData(
              scheduleData.filter((x) => {
                checkTimeHasPassed(x.time, date && date);
              })
            );
          }}
          themeVariant={isThemeDark ? "dark" : "light"}
          value={date}
          minimumDate={new Date(Date.now())}
          maximumDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
          display="compact"
        />
        <Icon name="arrow-down" color={theme.colors.text} size={25} />
      </View>

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
