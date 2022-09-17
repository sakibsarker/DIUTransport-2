import { View, StatusBar, Image } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

import Map from "../../components/Map/Map";

const BusLocate = ({ route, navigation }) => {
  const theme = useTheme();
  const { info } = route?.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.cardToggle,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        position: "relative",
      }}
    >
      <Map
        title={route.params["busId"]}
        busId={route.params["busId"]}
        info={info && info}
        location={
          info?.location || {
            coordinates: [90.269018, 23.936878],
          }
        }
      />

      <Image
        style={{
          maxHeight: 30,
          position: "absolute",
          zIndex: 1,
          width: 35,
          right: 15,
        }}
        source={require("../../assets/images/live.png")}
      />
    </View>
  );
};

export default BusLocate;
