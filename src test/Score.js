// Path Score.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Score = (props) => {
  return (
    <View style={styles.score}>
      <Text style={styles.scoreText}>Score : {props.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue",
    position: "absolute",
    top: 0,
    right: 0,
  },
  scoreText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});