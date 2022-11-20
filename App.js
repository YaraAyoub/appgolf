import * as React from 'react';
import { StyleSheet, View } from "react-native";

// You can import from local files
import Jeu from './components/Jeu';

export default function App() {
  const props = {firstName: 'Ben', job: 'Designer' };
  return (
    <View style={styles.container}>
        <Jeu {...props}/>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


/*
import * as React from 'react';

import Constants from 'expo-constants';

import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, AppRegistry, Image } from 'react-native';
import {useState} from 'react';


import { VictoryScreen } from "./src/VictoryScreen";
import { GameOverScreen } from "./src/GameOverScreen";
import { CreditScreen } from './src/CreditScreen';
import { MenuScreen } from './src/MenuScreen';
import { Jeu } from './src/Jeu';

export default function App() { 
  const [nbCoup, setNbCoup] = useState(0);  // Nombre de coup joué par le joueur (initialisé à 0)
  const [xFlag, setXFlag] = useState(0);
  const [yFlag, setYFlag] = useState(0);
  
  const [etapeJeu, setEtapeJeu] = useState(3);  // 0 = jeu en cours, 1 = victoire, 2 = game over, 3 = menu, 4 = crédit

  const incrementValue = () => {
    if((nbCoup+1) <5){  // 5 = nombre de coup max pour gagner
      setNbCoup(nbCoup + 1);  // On incrémente le nombre de coup
    }
    else{ // Si le nombre de coup est supérieur à 5, on passe à l'étape de défaite
      setEtapeJeu(2); // game over
    } 
  }
  
  const victoire = () => {  // Si le joueur gagne, on passe à l'étape de victoire
    setEtapeJeu(1); // victoire
  }

  const gameOver = () => {
    setEtapeJeu(2); // game over
  }

  const menu = () => {  // Retour au menu
    setNbCoup(0);
    setEtapeJeu(3); // menu
  }

  const startGame = () => { // Lancement du jeu
    setEtapeJeu(0); // jeu en cours
    setXFlag(Math.floor(Math.random() * 300) + 1); // Positionnement aléatoire du drapeau
    setYFlag(Math.floor(Math.random() * 300) + 1); // Positionnement aléatoire du drapeau
  }

  const credit = () => {  // Affichage des crédits
    setEtapeJeu(4); // crédit
  }

  const checkBallFlagPosition = (xBall, yBall) => {
    if((xFlag < xBall+50 || xFlag > xBall-50) && (yFlag < yBall+50 || yFlag > yBall-50)){
      victoire();
    }
  }

  const renderScene = () => { // Fonction qui permet de gérer les différentes étapes du jeu
    switch(etapeJeu){
      case 0: // jeu en cours
        return <Jeu nbCoup={nbCoup} incrementValue={incrementValue} victoire={victoire} gameOver={gameOver} xFlag={xFlag} yFlag={yFlag}/>;
      case 1: // victoire
        return <VictoryScreen score={nbCoup} bestScore={nbCoup} resetGame={menu} /> // On passe le score et le meilleur score à la fonction VictoryScreen
      case 2: // game over
        return <GameOverScreen score={nbCoup} bestScore={nbCoup} resetGame={menu} /> // On passe le score et le meilleur score à la fonction GameOverScreen
      case 3: // menu
        return <MenuScreen startGame={startGame} credit={credit} /> // On passe les fonctions startGame et credit à la fonction MenuScreen
      case 4: // crédit
        return <CreditScreen returnMenu={menu} /> // On passe la fonction menu à la fonction CreditScreen
    }
  }
  
  return (
    <View style={styles.container}>
      {renderScene()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    //padding: 8,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
*/