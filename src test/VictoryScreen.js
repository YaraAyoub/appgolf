// Path VictoryScreen.js
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppRegistry, Image, ImageBackground, Dimensions, TouchableHighlight, TouchableWithoutFeedback, PanResponder, Animated } from 'react-native';

const { width, height } = Dimensions.get("window");

export const VictoryScreen = (props) => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setBestScore(props.bestScore);
    setScore(props.score);
  }, [props.bestScore, props.score]);

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
      <TouchableOpacity style={styles.button} onPress={() => props.resetGame()}>
        <Text style={styles.buttonText}>Rejouer</Text>
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
  },
});
