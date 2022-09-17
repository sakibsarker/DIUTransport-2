import { FlatList, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import PaymentMethod from "../../components/Payment/PaymentMethod";

const SelectMethod = ({ navigation }) => {
  const theme = useTheme();
  const images = {
    bkash: {
      uri: require("../../assets/images/bkash.png"),
    },
    oneCard: {
      uri: require("../../assets/images/oneCard.png"),
    },
  };
  const paymentmethodData = [
    {
      id: 1,
      name: "One Card",
      icon: images.oneCard,
    },
    // {
    //   id: 2,
    //   name: "Bkash",
    //   icon: images.bkash,
    // },
  ];

  const renderItem = ({ item }) => (
    <PaymentMethod props={item} navigation={navigation} />
  );

  return (
    <View>
      <FlatList
        data={paymentmethodData}
        numColumns={1}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SelectMethod;
