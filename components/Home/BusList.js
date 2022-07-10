import React, { useEffect } from "react";
import { List, useTheme, Text, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";
import { fetchBuses } from "../../redux/ApiCalls/bus";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
const BusList = ({ navigation, route }) => {
  const theme = useTheme();

  // const dispatch = useDispatch();
  // const { buses, loading, error } = useSelector((state) => state.bus);

  // useEffect(() => {
  //   dispatch(fetchBuses());
  //   if (error) {
  //     console.log(error);
  //   }
  // }, [error]);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* <Text>{route.params?.routeId}</Text> */}
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", {
              busId: "surjomukhi22",
              routeId: route.params?.routeId,
            })
          }
          key="1"
          style={styles.item}
          title="সূর্যমুখি 22"
          description="22"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", {
              busId: "surjomukhi10",
              routeId: route.params?.routeId,
            })
          }
          key="2"
          style={styles.item}
          title="সূর্যমুখি 10"
          description="10"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", {
              busId: "surjomukhi5",
              routeId: route.params?.routeId,
            })
          }
          key="3"
          style={styles.item}
          title="সূর্যমুখি 5"
          description="5"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
      <Surface elevation={4}>
        <List.Item
          onPress={() =>
            navigation.navigate("BusDetails", {
              busId: "surjomukhi1",
              routeId: route.params?.routeId,
            })
          }
          key="4"
          style={styles.item}
          title="সূর্যমুখি 1"
          description="1"
          left={(props) => <List.Icon {...props} icon="bus" />}
        />
      </Surface>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default BusList;
