import React from 'react';
import {  View,StyleSheet,Dimensions  } from 'react-native';
import MapBoxGL from '@react-native-mapbox-gl/maps'
const token = "pk.eyJ1Ijoic3Jqb3kiLCJhIjoiY2w0cjFzczkzMHd1dDNiczhkcjh4Y3Z3YSJ9.TW2L3JDWJGzt9bGU2a-ANA"
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

const MyMap = () => {
  return (

      <View style={styles.container}>
        <MapBoxGL.MapView 
            styleURL={MapBoxGL.StyleURL.TrafficDay}
            style={styles.map} 
            zoomLevel={14}
            centerCoordinate={[90.3241774,23.8772762]}
        >
            <MapBoxGL.Camera
                zoomLevel={16}
                animationMode={'flyTo'}
                animationDuration={500}
                centerCoordinate={[90.3241774,23.8772762]}
            />
        </MapBoxGL.MapView>
      </View>
   
  );
}

export default MyMap