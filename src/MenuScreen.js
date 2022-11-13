// Path MenuScreen.js
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Constants from 'expo-constants'

import { CreditScreen } from './CreditScreen';

export const MenuScreen = ({startGame}) => {

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
          
          <TouchableOpacity style={styles.touchable} onPress={startGame}>
              <Text style={styles.touchableText}>Start</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.touchable} onPress={credit}>
              <Text style={styles.touchableText}>Crédits</Text>
          </TouchableOpacity>
      </ImageBackground>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
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
  }
})
