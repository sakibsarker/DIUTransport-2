import * as React from 'react';
import { List } from 'react-native-paper';
import {StyleSheet,View} from 'react-native';

const BusList = () => (
    <View style={styles.container}>
        <List.Item
            style={styles.item}
            title="BUS 1"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 2"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 3"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 4"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 5"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 6"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 7"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
        <List.Item
            style={styles.item}
            title="BUS 8"
            description="Surjomukhi 1"
            left={props => <List.Icon {...props} icon="bus" />}
        />
    </View>
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' 
    },
    item: {
      width: '50%' 
    }
  })

export default BusList;

