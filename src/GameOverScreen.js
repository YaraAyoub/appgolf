// Path GameOverScreen.js
import React from 'react'
import {ImageBackground, Dimensions,  RefreshControl , StyleSheet, Text, View, TouchableOpacity, useState} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}



export const GameOverScreen = ({retourMenu, bestScore}) => {

  return (
    <>
      <ImageBackground source={require('../img/gameover.gif')} resizeMode="cover" style={styles.gameover}/>
      <Text style={{ ...styles.paragraph, top: windowHeight*0.28, left: windowWidth*0.13, fontSize: 60, color : 'red'}}>
        Game Over
      </Text>
      <Text  style={{ ...styles.paragraph, top: windowHeight*0.6479, left: windowWidth * 0.2948, fontSize: 25, color : 'red'}}>
        Best Score : {bestScore}
      </Text>

      <TouchableOpacity onPress={() => {retourMenu();}} style={styles.button}>

        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  gameover : {
    width : windowWidth, 
    height : windowHeight,
  },
  paragraph: {
    position : 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    position : 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    top :windowHeight*0.75593,
left :  windowWidth*0.36556,
 height: windowHeight*0.05399,
    width:  windowWidth*0.23584,
  },
  buttonText: {
    fontSize: 30,
    color : 'black', 
    padding : windowHeight*0.00539,
    paddingLeft: windowWidth*0.0353,
  }
})