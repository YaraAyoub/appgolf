//import react
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

//Constante Ã©cran
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Flag({x, y}) {
  return (
    <>
        <View style={{
            width: 40,
            height: 40,
            borderRadius: 60 / 2,
            backgroundColor: 'black',
            position: 'absolute',
            top: x,
            left: y,
        }} />

        <Image source={require('../img/flag.png')} style={{
            width: 70,
            height: 80,
            position: 'absolute',
            top: x-60,
            left: y+8,
        }} />
    </>
      
  );
}