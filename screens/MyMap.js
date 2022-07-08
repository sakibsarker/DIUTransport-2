import React from 'react';


import {  useSelector } from 'react-redux';
import MapMarker from '../components/MapMarker';




const MyMap = () => {
  const { buses } = useSelector((state) => state.bus)
  console.log(buses)
  //console.log(buses[0].location.coordinates)
  //const testLoc = buses[0].location.coordinates
  const coordinates = [90.3241774,23.8772762]
  return (

      <MapMarker coordinates={coordinates}/>
   
  );
}

export default MyMap