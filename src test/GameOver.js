// Path GameOver.js
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppRegistry, Image, ImageBackground, Dimensions, TouchableHighlight, TouchableWithoutFeedback, PanResponder, Animated } from 'react-native';

const { width, height } = Dimensions.get("window");

export const GameOver = (props) => {
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGameOver(props.gameOver);
  }, [props.gameOver]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {gameOver ? "Game Over" : ""}
      </Text>
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
});