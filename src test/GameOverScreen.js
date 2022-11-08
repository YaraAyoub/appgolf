// Path GameOverScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppRegistry, Image, ImageBackground, Dimensions, TouchableHighlight, TouchableWithoutFeedback, PanResponder, Animated } from 'react-native';

const { width, height } = Dimensions.get("window");

export const GameOverScreen = ({resetGame, bestScore, setBestScoreValue, score, resetBestScore}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Game Over
      </Text>
      <Text style={styles.paragraph}>
        Score : {score}
      </Text>
      <Text style={styles.paragraph}>
        Best Score : {bestScore}
      </Text>
      <TouchableOpacity onPress={() => {resetGame(); setBestScoreValue();}} style={styles.button}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});