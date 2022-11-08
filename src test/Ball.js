// Path Ball.js
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Animated, PanResponder, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Ball = (props) => {
  const [ballPosition, setBallPosition] = useState({x: 0, y: 0});

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
        if(pan.x._value < 0){
          pan.x.setValue(0);
        }
        if(pan.x._value > width-100){
          pan.x.setValue(width-100);
        }
        if(pan.y._value < 0){
          pan.y.setValue(0);
        }
        if(pan.y._value > height-100){
          pan.y.setValue(height-100);
        }
        props.setBallPositionValue(pan.x._value, pan.y._value);
      },
    })
  ).current;

  useEffect(() => {
    if(props.ballPosition.x != 0 && props.ballPosition.y != 0){
      Animated.spring(pan, {
        toValue: { x: props.ballPosition.x, y: props.ballPosition.y },
        useNativeDriver: false,
      }).start();
    }
  }, [props.ballPosition]);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[pan.getLayout(), styles.ball]}
    />
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
  },
});