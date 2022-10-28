// Path MenuScreen.js

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppRegistry, Image, ImageBackground, Dimensions, TouchableHighlight, TouchableWithoutFeedback, PanResponder, Animated } from 'react-native';

const { width, height } = Dimensions.get("window");
import Constants from 'expo-constants';

export const MenuScreen = ({startGame, credit}) => {
  return (
    <ImageBackground source={require('../img/bgMenu.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Menu</Text>
        
        <TouchableOpacity style={styles.touchable} onPress={startGame}>
            <Text style={styles.touchableText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={credit}>
            <Text style={styles.touchableText}>Crédits</Text>
        </TouchableOpacity>
    </ImageBackground>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    //margin: 12,
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
