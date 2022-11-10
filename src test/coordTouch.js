// récupère les coordonnées du toucher sur l'écran et les affiche dans la console

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

// sreenWidth et screenHeight sont des variables globales
// qui contiennent la largeur et la hauteur de l'écran
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function CoordTouch() {
    const [coord, setCoord] = useState({x: 0, y: 0});
    
    const handlePress = (e) => {
        setCoord({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY});
    }
    
    return (
        <>
        <TouchableOpacity onPress={handlePress} style={styles.touchable}>
            <Text style={styles.text}>Coordinates: {coord.x}, {coord.y}</Text>
        </TouchableOpacity>

        </>
    );
    }

    const styles = StyleSheet.create({
    touchable: {
        backgroundColor: 'lightgreen',
        width: screenWidth,
        height: screenHeight,
    },
    text: {
        paddingTop: 60,
        textAlign: 'center',
    },
    });
