// Path Hole.js
import React from "react";
import { View, StyleSheet } from "react-native";

export const Hole = () => {
  return (
    <View style={styles.hole} />
  );
}

const styles = StyleSheet.create({
  hole: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
  },
});