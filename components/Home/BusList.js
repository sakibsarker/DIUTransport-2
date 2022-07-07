import React,{useEffect} from 'react';
import { List,useTheme } from 'react-native-paper';
import {StyleSheet,View} from 'react-native';
import { fetchBuses } from '../../redux/ApiCalls/bus';
import { useDispatch, useSelector } from 'react-redux';
const BusList = () => {

    const theme = useTheme();

    const dispatch = useDispatch();
    const { buses } = useSelector((state) => state.bus)
    useEffect(() => {
        dispatch(fetchBuses());
    },[dispatch])

    return(
    <View style={styles.container}>
        {buses?.map((bus) => 
            <List.Item
                key={bus._id}
                style={{...styles.item,backgroundColor:theme.colors.accent}}
                title={bus.name}
                description={bus.busNo}
                left={props => <List.Icon {...props} icon="bus" />}
            />
        )}
        
    </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' ,
    },
    item: {
      width: '50%',
      color:"white",
      borderWidth:1,
      borderColor:"#fff",
    }
  })

export default BusList;

