// Path CreditScreen.js
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

export const CreditScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>
                Crédits :
            </Text>
            <Text style={styles.paragraph}>
                AYOUB Yara
            </Text>
            <Text style={styles.paragraph}>
                HUCK Martin
            </Text>
            
            <TouchableOpacity style={styles.button} onPress={() => props.returnMenu()}>
                <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: '100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h1:{
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: '50%',
  },
  buttonText: {
    fontSize: 20,
  },
});
