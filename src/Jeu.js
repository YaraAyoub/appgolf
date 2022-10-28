// Path Jeu.js

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppRegistry, Image, ImageBackground, Dimensions, TouchableHighlight, TouchableWithoutFeedback, PanResponder, Animated } from 'react-native';

export const Jeu = ({nbCoup, incrementValue, victoire}) => {
  return (
    <ImageBackground source={require('../img/bgGame.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.coupRestant}>{nbCoup}</Text>
        
        <TouchableOpacity style={styles.touchable} onPress={incrementValue}>
            <Text style={styles.touchableText}>Incrémente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={victoire}>
            <Text style={styles.touchableText}>Victoire</Text>
        </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  coupRestant: {
    flex: 1,
    //justifyContent: 'right',
    //alignItems: 'right',
    margin: 12,
    color: 'black',
    fontSize: 35,
    //backgroundColor: 'green',
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: '#7986cb',
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
  },
  touchableText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
});
