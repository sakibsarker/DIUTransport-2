import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import BusList from '../components/Home/BusList';
import SearchBar from '../components/Home/SearchBar';
import { useTheme,Divider,Button} from 'react-native-paper'

const Home = () => {
  const theme = useTheme();
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: theme?.colors.surface,
  }}
    >
    <SearchBar/>
    <View style={styles.container}>
      <Text style={styles.col2}>All Transports</Text>
      <Button style={styles.col2}><Text style={{color:theme?.colors.accent}}>View All</Text></Button>
    </View>
    <Divider/>
    <BusList/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' ,
    marginTop:15,
    paddingLeft:25
  },
  col2: {
    width: '50%' 
  }
})

export default Home