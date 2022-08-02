import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme, Text } from "react-native-paper";

const DestinationToggle = () => {
  const theme = useTheme();
  const [source, setSource] = useState("Daffodil Internation University");
  const [destination, setDestination] = useState("Jahangirnagar University");

  const handlePress = () => {
    let x = source;
    setSource(destination);
    setDestination(x);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="ellipse-outline"
            size={20}
            color={theme.colors.text}
            style={{ paddingLeft: 7 }}
          />
          <Text
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#B5B5B5",
            }}
          >
            {source}
          </Text>
        </View>
        <Ionicons
          name="ios-ellipsis-vertical-outline"
          size={20}
          color={theme.colors.text}
          style={{ paddingLeft: 7 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={35} color={theme.colors.darkRed} />
          <Text
            style={{
              marginLeft: 7,
              borderBottomWidth: 1,
              borderBottomColor: "#B5B5B5",
              paddingVertical: 5,
            }}
          >
            {destination}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: theme.colors.cardToggle,
          borderRadius: 100,
          padding: 10,
        }}
      >
        <Ionicons
          name="swap-vertical-sharp"
          size={25}
          color={theme.colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};
export default DestinationToggle;
