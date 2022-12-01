// Path VictoryScreen.js
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const VictoryScreen = (props) => {
  const [bestScore, setBestScore] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setBestScore(props.bestScore)
    setScore(props.score);
  }, [props.bestScore, props.score])

  return (
    <>
    <ImageBackground source={require('../img/victory2.gif')} resizeMode="cover" style={styles.victory}/>
      <Text style={{ ...styles.paragraph, top: windowHeight*0.21598, left: windowWidth*0.23584, fontSize: 60}}>
        Victoire
      </Text>
      <Text style={{ ...styles.paragraph, top: windowHeight*0.4319, left:  windowWidth*0.35377, fontSize: 25}}>
        Score : {score}
      </Text>
      <Text style={{ ...styles.paragraph, top: windowHeight*0.53995, left:  windowWidth*0.28301, fontSize: 25 }}>
        Meilleur score : {bestScore}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.retourMenu()}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      
     
    </>
  )
}

const styles = StyleSheet.create({

  paragraph: {
      position : 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    position : 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    top : windowHeight*0.70194,
left :  windowWidth*0.36556,
 height: windowHeight*0.05399,
    width:  windowWidth*0.23584,
  },
  buttonText: {
    fontSize: 30,
    color : 'black', 
    padding : windowHeight*0.00539,
    paddingLeft: windowWidth*0.0353,
  }, 
  victory : {
    width : windowWidth, 
    height : windowHeight,
  }
})
