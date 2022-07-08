import React from 'react'
import MapBoxGL from '@react-native-mapbox-gl/maps'
import {  View,StyleSheet,Dimensions,Text  } from 'react-native';
const token = "sk.eyJ1Ijoic3Jqb3kiLCJhIjoiY2w1YzY1ZDJoMGVrZDNjc2VxNHQyMGJycCJ9.TzkF1ZZvOamM4o73e_brpg"
MapBoxGL.setAccessToken(token)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').height,
      backgroundColor: 'tomato'
    },
    map: {
      flex: 1
    }
  });



const MapMarker = ({coordinates}) => {
  return (
    <View style={styles.container}>
        <MapBoxGL.MapView 
            styleURL={MapBoxGL.StyleURL.Street}
            style={styles.map} 
            zoomLevel={14}
            centerCoordinate={coordinates}
        >
            <MapBoxGL.Camera
                zoomLevel={16}
                animationMode={'flyTo'}
                animationDuration={500}
                centerCoordinate={coordinates}
            />
              <MapBoxGL.MarkerView
                coordinate={coordinates}>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                  <Text>GG</Text>
                </View>
              </MapBoxGL.MarkerView>
        </MapBoxGL.MapView>
      </View>
  )
}

export default MapMarker