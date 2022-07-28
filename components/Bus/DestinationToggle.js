import { View,Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from "react-native-paper";



const DestinationToggle = () =>
{
  const theme = useTheme();
  const [source, setSource] = useState('Daffodil Internation University');
  const [destination, setDestination] = useState('Jahangirnagar University');

  const handlePress = () =>{
    let x = source;
    setSource(destination);
    setDestination(x);
  }
  return (
  
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginVertical:20,}}>
        <View >
            <View style={{flexDirection:'row',alignItems:'center', paddingVertical:10,}}> 
              <Ionicons name='ellipse-outline' size={20} color={theme.colors.accent}/>     
              <Text style={{marginLeft:10, borderBottomWidth:1, borderBottomColor:'#B5B5B5', paddingVertical: 5}}>{source}</Text>
            </View>
          <Ionicons name='ios-ellipsis-vertical-outline' size={20}/>
            <View style={ {flexDirection:'row',alignItems:'center',paddingVertical:10,}}>
              <Ionicons name='location' size={20} color={theme.colors.darkRed}/>
              <Text style={{marginLeft:10,borderBottomWidth:1, borderBottomColor:'#B5B5B5', paddingVertical: 5}}>{destination}</Text>
            </View>
        </View>
        <TouchableOpacity onPress= {handlePress}>
          <Ionicons name='swap-vertical-sharp' size={20} />
        </TouchableOpacity>
      
      </View>
  );
}
export default DestinationToggle;