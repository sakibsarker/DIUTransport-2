import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';

import { useTheme, Text, List, Surface } from 'react-native-paper';
import FavoriteBus from '../../../components/Bus/FavoriteBus';
const Favourites = ({ navigation }) => {
  const theme = useTheme();

  const favoritesData = [
    {
      id: 1,
      busName: 'Shurjomukhi-21',
      busId: '123',
    },
    {
      id: 2,
      busName: 'Shurjomukhi-22',
      busId: '1234',
    },
  ];
  const renderItem = ({ item }) => <FavoriteBus props={item} />;
  return (
    <View>
      <View style={{ paddingHorizontal: 25 }}>
        <FlatList
          data={favoritesData}
          numColumns={1}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Favourites;
