import React, { useEffect } from "react";
import { List, useTheme, Text, Surface } from "react-native-paper";
import { FlatList, ImageBackground, SafeAreaView, View } from "react-native";
import Bus from "../Bus/Bus";
const BusList = ({ navigation, route }) => {
  const theme = useTheme();

  const { startTimes, routeDetails, departureTimes, image } =
    route.params?.info;

  const busData = [
    {
      id: 1,
      backgroundColor: theme.colors.gray,
      name: "Surjomukhi 1",
      busId: "surjomukhi22",
      status: "Returning",
      location: {
        coordinates: [90.269018, 23.936878],
      },
    },
    {
      id: 2,
      name: "Surjomukhi 2",
      busId: "surjomukhi10",
      status: "Started",
      location: {
        coordinates: [90.269018, 23.936878],
      },
      backgroundColor: theme.colors.yellow,
    },
    {
      id: 3,
      name: "Surjomukhi 2",
      busId: "surjomukhi1",
      status: "Standby",
      location: {
        coordinates: [90.269018, 23.936878],
      },
      backgroundColor: theme.colors.red,
    },
  ];

  const renderItem = ({ item }) => <Bus props={item} navigation={navigation} />;

  const renderPromoHeader = () => (
    <View style={{ marginTop: 40 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Available Buses</Text>
    </View>
  );

  const renderPage = () => (
    <>
      <ImageBackground source={{ uri: image }} style={{ padding: 50 }} />

      <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 15 }}>
          Route Details
        </Text>
        <Text>{routeDetails}</Text>
      </View>

      <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 15 }}
            >
              Starting Times
            </Text>
            {startTimes.map((stime) => (
              <Text key={stime}>{stime}</Text>
            ))}
          </View>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 15 }}
            >
              Departure Times
            </Text>
            {departureTimes.map((stime) => (
              <Text key={stime}>{stime}</Text>
            ))}
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 25 }}>
        <FlatList
          ListHeaderComponent={renderPromoHeader}
          data={busData}
          listKey={1}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={[{}]}
        numColumns={1}
        renderItem={renderPage}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default BusList;
