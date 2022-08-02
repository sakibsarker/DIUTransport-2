import { FlatList, View } from "react-native";
import { Divider, Text, useTheme } from "react-native-paper";
import React from "react";
import Schedule from "../../components/Bus/Schedule";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { PreferencesContext } from "../../contexts/PreferencesContext ";
import { checkTimeHasPassed } from "../../Utils/CheckTime";

const SelectSchedule = ({ navigation }) => {
  const theme = useTheme();
  const { isThemeDark } = React.useContext(PreferencesContext);
  const [data, setDate] = React.useState(new Date(Date.now()));

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
  ]);

  React.useEffect(() => {
    setScheduleData(scheduleData.filter((x) => checkTimeHasPassed(x.time)));
  }, []);

  const renderItem = ({ item }) => (
    <Schedule props={item} navigation={navigation} />
  );

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ marginVertical: 20 }}>
        <RNDateTimePicker
          style={{ width: 134 }}
          onChange={setDate}
          themeVariant={isThemeDark ? "dark" : "light"}
          value={new Date()}
          minimumDate={new Date(Date.now())}
          maximumDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
        />
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
