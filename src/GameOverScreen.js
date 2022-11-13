// Path GameOverScreen.js
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export const GameOverScreen = ({retourMenu, bestScore}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Game Over
      </Text>
      <Text style={styles.paragraph}>
        Best Score : {bestScore}
      </Text>
      <TouchableOpacity onPress={() => {retourMenu();}} style={styles.button}>
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
    backgroundColor: 'red',
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
    fontWeight: 'bold',
  }
})