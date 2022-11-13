// Path VictoryScreen.js
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const VictoryScreen = (props) => {
  const [bestScore, setBestScore] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setBestScore(props.bestScore)
    setScore(props.score);
  }, [props.bestScore, props.score])

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Victoire
      </Text>
      <Text style={styles.paragraph}>
        Score : {score}
      </Text>
      <Text style={styles.paragraph}>
        Meilleur score : {bestScore}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.retourMenu()}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
  }
})
