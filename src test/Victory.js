// Path Victory.js
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppRegistry, Image, ImageBackground, Dimensions, TouchableHighlight, TouchableWithoutFeedback, PanResponder, Animated } from 'react-native';

const { width, height } = Dimensions.get("window");

export const Victory = (props) => {
  const [victoire, setVictoire] = useState(false);

  useEffect(() => {
    setVictoire(props.victoire);
  }, [props.victoire]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {victoire ? "Victoire" : ""}
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
  