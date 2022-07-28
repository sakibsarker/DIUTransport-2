import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import Notice from "../../components/Notice/Notice";
import { SwipeListView } from "react-native-swipe-list-view";
const NoticeBoard = ({ navigation }) => {
  const theme = useTheme();

  const noticeData = [
    {
      id: 1,
      noticeMessage: "New Schedule 2.0 - 2022",
      description: "New schedule updated , please check",
      posted: "2 days ago",
      read: false,
    },
    {
      id: 2,
      noticeMessage: "New Schedule 3.0 August - 2022",
      description: "New schedule updated , please check",
      posted: "5 second ago",
      read: true,
    },
  ];
  const renderItem = ({ item }) => (
    <Notice props={item} navigation={navigation} />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <View>
          <SwipeListView
            data={noticeData}
            renderItem={renderItem}
            renderHiddenItem={(data, rowMap) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  borderRadius: 25,
                }}
                onPress={() => {
                  Alert.alert("Confirmation", "Are you sure want to delete ?", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                    },
                  ]);
                }}
              >
                <Text>Remove</Text>
              </TouchableOpacity>
            )}
            leftOpenValue={0}
            rightOpenValue={-100}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NoticeBoard;
