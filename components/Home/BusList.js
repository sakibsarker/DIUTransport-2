import React, { useEffect } from "react";
import { List, useTheme } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { fetchBuses } from "../../redux/ApiCalls/bus";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
const BusList = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { buses, loading } = useSelector((state) => state.bus);

  useEffect(() => {
    dispatch(fetchBuses());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <List.Item
        key="1"
        style={styles.item}
        title="সূর্যমুখি ১"
        description="১"
        left={(props) => <List.Icon {...props} icon="bus" />}
      />
      <List.Item
        key="2"
        style={styles.item}
        title="সূর্যমুখি ২"
        description="২"
        left={(props) => <List.Icon {...props} icon="bus" />}
      />
      <List.Item
        key="3"
        style={styles.item}
        title="সূর্যমুখি ৩"
        description="৩"
        left={(props) => <List.Icon {...props} icon="bus" />}
      />
      <List.Item
        key="4"
        style={styles.item}
        title="সূর্যমুখি ৪"
        description="৪"
        left={(props) => <List.Icon {...props} icon="bus" />}
      />
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
  item: {
    width: "50%",
  },
});

export default BusList;
