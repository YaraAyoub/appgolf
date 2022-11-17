// Path MenuScreen.js
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import Constants from 'expo-constants'

import { CreditScreen } from './CreditScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const MenuScreen = ({startEasy, startMedium, startHard}) => {

  const [showCredit, setShowCredit] = React.useState(false);

  const credit = () => {  // Affichage des crédits
    setShowCredit(true);
  }

  const menu = () => {  // Retour au menu
    setShowCredit(false);
  }

  if(showCredit){
    return <CreditScreen returnMenu={menu} />
  }
  else{
    return (
      <ImageBackground source={require('../img/bgMenu.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Menu</Text>
          
          <TouchableOpacity style={styles.easy} onPress={startEasy}>
              <Text style={styles.touchableText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.medium} onPress={startMedium}>
              <Text style={styles.touchableText}>Medium</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.hard} onPress={startHard}>
              <Text style={styles.touchableText}>Hard</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.credit} onPress={credit}>
              <Text style={styles.touchableText}>Crédits</Text>
          </TouchableOpacity>
      </ImageBackground>     
    )
  }
}

const styles = StyleSheet.create({
  easy: {
    position : 'absolute',
    top : windowHeight*0.5615,
    left : windowWidth*0.1886,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  medium: {
    position : 'absolute',
    top : windowHeight*0.5615,
    left : windowWidth*0.4127,
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
  },
   hard: {
    position : 'absolute',
    top : windowHeight*0.5615,
    left : windowWidth*0.7075,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  credit: {
    position : 'absolute',
    top : windowHeight*0.4535,
    left : windowWidth*0.4127,
    alignItems: 'center',
    backgroundColor: '#7986cb',
    padding: 10,
    borderRadius: 10,
  },
  touchableText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
     position : 'absolute',
    top : 340,
    left : 170,
    color: 'black',
    fontSize: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
})