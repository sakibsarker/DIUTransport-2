import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteBus = ({ props }) => {
  const theme = useTheme();

  const [heart, setHeart] = useState('heart-o');

  const { id, busId, busName } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.cardToggle,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 15,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
        {busName}
      </Text>
      <TouchableOpacity onPress={() => setHeart('heart')}>
        <Icon name={heart} size={20} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoriteBus;
