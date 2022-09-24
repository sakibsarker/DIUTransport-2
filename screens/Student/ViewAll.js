import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Route from "../../components/Route/Route";
import * as queries from "../../src/graphql/queries";
import { API } from "aws-amplify";
import Loader from "../../components/Loader";

const ViewAll = ({ navigation, route }) => {
  const theme = useTheme();
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.graphql({
      query: queries.listRoutes,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })
      .then(({ data }) => {
        setRoutes(data.listRoutes.items);
        // console.log(data.listRoutes.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.errors[0]);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Route props={item} navigation={navigation} />
  );

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
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
