import React from "react";
import { Button } from 'react-native-paper';
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";

import { VictoryScreen } from "../src/VictoryScreen";
import { GameOverScreen } from "../src/GameOverScreen";
import { MenuScreen } from '../src/MenuScreen';

//Constante Ã©cran
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const height_mer = windowHeight * 0.0971;
const width_mer = windowWidth * 0.600;
const height_tree = windowHeight * 0.1145;
const width_tree = windowWidth * 0.3655;
const height_sand = windowHeight*0.1619;
const width_sand = windowWidth*0.2830;

let nbCoupMax = 5;
let nbObsatcle = 2;

class Ball extends React.Component {
  //create a constructor
  constructor(props) {
    //call the super class constructor
    super(props);

    // This binding is necessary to make `this` work in the callback
    //set the initial state
    this.state = {
      isToggleOn: true,
      prectoggle: true,
      x: windowWidth*0.1179,
      y: windowHeight*0.1187, // + 12 // -5 
      prev_x: 150,
      prev_y: 400,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      touchable: 1,
      height: 60,
      rotate: 0,
      speed: 1,
      show_arrow: 1,
      show_menu: 0,
      x_drapeau: windowWidth*0.2358,
      y_drapeau: windowHeight*0.8099, // MIN : windowHeight * 0.167 // MAX :  windowHeight * 0.78 
      victory: 0,
      defeat: 0,
      x_touch: 0,
      y_touch: 0,
      color_force: 'green',
      x_mer: 0,
      y_mer: windowHeight * 0.4859,
      x_tree: windowWidth * 0.3301, // taille 92
      y_tree: windowHeight *0.2159, // taille 107 
      x_tree2: windowWidth * 0.6,
      y_tree2: windowHeight * 0.7,
      x_tree3: windowWidth * 0.03,
      y_tree3: windowHeight * 0.6,
      x_sand : windowWidth*0.63, 
      y_sand : windowHeight*0.4535,
      nbCoups: 0,
      test: 0,
    };

    this.shootBall = this.shootBall.bind(this);
    this.increaseForce = this.increaseForce.bind(this);
    this.decreaseForce = this.decreaseForce.bind(this);
    this.start = this.start.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.chooseBallDirection = this.chooseBallDirection.bind(this);
    this.setLevelEasy = this.setLevelEasy.bind(this);
    this.setLevelMedium = this.setLevelMedium.bind(this);
    this.setLevelHard = this.setLevelHard.bind(this);
  }

  // function called when the button "tap to shoot" is clicked
  shootBall() {
    if (this.state.touchable == 1) {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        touchable: 0,
        nbCoups : this.state.nbCoups + 1,
      })
      );
     
      this.moveBall();     
    }
  }

  start() {
    // let max_height = windowHeight * 0.8500;
    // let min_height = windowHeight * 0.7019;
    // let max_width = windowWidth * 0.841;
    // let y_drapeau_bis = Math.random() * (max_height - min_height) + min_height;
    // let x_drapeau_bis = Math.random() * (max_width);
    

    this.setState(prevState => ({
      show_menu: 0,
      // y_drapeau: y_drapeau_bis,
      // x_drapeau: x_drapeau_bis,
      x_drapeau: windowWidth*0.2358,
      y_drapeau: windowHeight*0.8099,
      x: windowWidth * 0.1779,
      y: windowHeight * 0.1619,
    })
    );
  }

  setLevelEasy () {
    nbCoupMax = 7;
    nbObsatcle = 2;
    this.start()
  }

  setLevelMedium () {
    nbCoupMax = 5;
    nbObsatcle = 2;
    this.start()
  }

  setLevelHard () {
    nbCoupMax = 4;
    nbObsatcle = 3;
    this.start()
  }

  resetGame() {
    this.setState({
      isToggleOn: true,
      prectoggle: true,
      x: windowWidth*0.1179,
      y: windowHeight*0.1187, // + 12 // -5 
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      touchable: 1,
      height: 60,
      rotate: 0,
      speed: 1,
      show_arrow: 1,
      show_menu: 1,
      x_drapeau: 100,
      y_drapeau: 600, // MIN : windowHeight * 0.167 // MAX :  windowHeight * 0.78 
      victory: 0,
      defeat: 0,
      nbCoups: 0,
    })
  }

  increaseForce() {
    let speed2 = this.state.speed;
    let colortext = this.state.color_force;

    if (speed2 != 5) {
      speed2 += 1;
    }
    if (speed2 < 3) {
      colortext = 'green';
    }
    else if (speed2 >= 3 && speed2 <= 4) {
      colortext = 'orange';
    }
    else if (speed2 >= 5) {
      colortext = 'red';
    }
    this.setState({
      speed: speed2,
      color_force: colortext
    })
  }

  decreaseForce() {
    let speed2 = this.state.speed;
    let colortext = this.state.color_force;
    if (speed2 != 0) {
      speed2 -= 1;
    }
    if (speed2 <3) {
      colortext = 'green';
    }
    else if (speed2 ==3 || speed2 == 4) {
      colortext = 'orange';
    }
    else if (speed2 ==5) {
      colortext = 'red';
    }
    this.setState(prevState => ({
      speed: speed2,
      color_force: colortext
    })
    );
  }

  chooseBallDirection(e) {
    let x = this.state.x;
    let y = this.state.y;
    let x_touch = e.nativeEvent.locationX;
    let y_touch = e.nativeEvent.locationY;
    let vec_balle = x;
    let vecX_AB = x_touch - x;
    let vecY_AB = y_touch - y;
    let norme_VecAB = Math.sqrt(Math.pow(vecX_AB, 2) + Math.pow(vecY_AB, 2));
    let prod_scal = vec_balle * vecX_AB;
    let result_cos = prod_scal / (vec_balle * norme_VecAB);
    let orientation = (Math.acos(result_cos) * 180) / Math.PI;
    if (y_touch < y) {
      orientation = 360 - orientation;
    }
    this.setState({
      x_touch: e.nativeEvent.locationX,
      y_touch: e.nativeEvent.locationY,
      rotate: orientation
    })
  }

  moveBall() {
    let vitesse_b = 0;
    if (this.state.speed > 0) {
      vitesse_b = 40 + 7 * this.state.speed;
    }
    //create a variable called x and set it to the current x position of the ball
    let x = this.state.x;
    //create a variable called y and set it to the current y position of the ball
    let y = this.state.y;
    let prev_x = this.state.prev_x;
    let prev_y = this.state.prev_y;
    //create a variable called vx and set it to the current vx position of the ball

let defeat = this.state.defeat;
    let rotate = this.state.rotate;
    let touchable = 0;
    let x_drapeau = this.state.x_drapeau;
    let y_drapeau = this.state.y_drapeau;
    let victory = this.state.victory;
    let show_arrow = this.state.show_arrow;
    //create a variable called radius and set it to the current radius of the ball
    let radius = this.state.radius;
    //create a variable called color and set it to the current color of the ball
    let color = this.state.color;
    //create a variable called nextX and set it to the current x position of the ball plus the current vx position of the ball

    let toggle = this.state.isToggleOn;
    let prectoggle = this.state.prectoggle;
    //if the next x position of the ball is less than or equal to zero or greater than or equal to the width of the window minus the radius of the ball
    if (rotate < 0) {
      rotate = 360 + rotate;
    }
    if (rotate > 360) {
      rotate = rotate - 360;
    }
    if (toggle != prectoggle) {
      prectoggle = toggle;
      this.setState({ vx: vitesse_b * 0.05 })
      this.setState({ vy: vitesse_b * 0.05 })
    }

    let nextX = x + this.state.vx * Math.cos((rotate * 3.14) / 180);
    //create a variable called nextY and set it to the current y position of the ball plus the current vy position of the ball
    let nextY = y + this.state.vy * Math.sin((rotate * 3.14) / 180);

    if (this.state.vx != 0 && (nextX <= 0 || nextX >= windowWidth - ((428 * 7.24) / 100))) {
      //set the vx position of the ball to the opposite of the current vx position of the ball
      this.setState({ vx: -(this.state.vx) })
      nextX = x + this.state.vx * Math.cos((rotate * 3.14) / 180);
      // rotate = rotate + 180;
    }
    //if the next y position of the ball is less than or equal to zero or greater than or equal to the height of the window minus the radius of the ball
    if (this.state.vy != 0 && (nextY <= ((windowHeight * 10.6) / 100) || nextY >= ((windowHeight * 85.5) / 100))) {
      //set the vy position of the ball to the opposite of the current vy position of the ball
      // vy = -vy;
      this.setState({ vy: -(this.state.vy) })
      nextY = y + this.state.vy * Math.sin((rotate * 3.14) / 180);
      //  rotate = rotate +180;
    }

    touchtrees(this, this.state.x_tree, this.state.y_tree);
    touchtrees(this, this.state.x_tree2, this.state.y_tree2);
    touchtrees(this, this.state.x_tree3, this.state.y_tree3);

    let vx = this.state.vx;
    //create a variable called vy and set it to the current vy position of the ball
    let vy = this.state.vy;



    if (x_drapeau + 8 >= x && x_drapeau - 4 <= x && y_drapeau - 4 <= y && y <= y_drapeau + 8 && vx <= 2.7 && vy <= 2.7) {
      vx = 0;
      vy = 0;
      victory = 1;
    }
    if (Math.abs(vx) <= 0.0200 && Math.abs(vy) <= 0.0200) {
      vx = 0;
      vy = 0;
      touchable = 1;
      show_arrow = 1;
      prev_x = this.state.x;
      prev_y = this.state.y;
       if (this.state.nbCoups == nbCoupMax) {
        defeat = 1;
       }
    }
    else {
      show_arrow = 0;
    }

    if (vx < 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand)
      {
        vx = vx + 0.0300;
      }
      else
      {
      vx = vx + 0.0200;
      }
    }
    else if (vx > 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand)
      {
        vx = vx - 0.0300;
      }
      else
      {
      vx = vx - 0.0200;
      }
    }
    if (vy < 0) {
     if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand)
      {
        vy = vy + 0.0300;
      }
      else
      {
      vy = vy + 0.0200;
      }
    }
    else if (vy > 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand)
      {
        vy = vy - 0.0300;
      }
      else
      {
      vy = vy - 0.0200;
      }
    }

    // verifie si la balle entre en collision avec un obstacle
    if (y <= this.state.y_mer + height_mer && y + 30 >= this.state.y_mer && x <= this.state.x_mer + width_mer && x + 30 >= this.state.x_mer) {
      x = prev_x;
      y = prev_y;
      vx = 0;
      vy = 0;
      touchable = 1;
      show_arrow = 1;
    }
    else {
      x = x + vx * Math.cos((rotate * 3.14) / 180);
      y = y + vy * Math.sin((rotate * 3.14) / 180);
    }



    //set the state of the ball to the new x position, the new y position, the new vx position, the new vy position, the radius of the ball, and the color of the ball
    this.setState({
      x: x,
      y: y,
      vx: vx,
      vy: vy,
      radius: radius,
      color: color,
      prectoggle: prectoggle,
      touchable: touchable,
      rotate: rotate,
      show_arrow: show_arrow,
      victory: victory,
      prev_x: prev_x,
      prev_y: prev_y, 
      defeat : defeat,
    });
    setTimeout(this.moveBall.bind(this), 1);
  }

  render() {
    let styles = StyleSheet.create({
      styleball: {
        position: 'absolute',
        top: this.state.y,
        left: this.state.x,
        flex: 1,
        justifyContent: "center",
        height: 30,
        width: 30, 
        shadowColor : 'black',
        zIndex : 3,
      },
      rectangle: {
        width: this.state.height,
        height: 5,
        backgroundColor: "red",
        position: 'absolute',
        top: this.state.y + 12,
        left: this.state.x - 13,
        transform: [
          {
            rotate: this.state.rotate + 'deg'
          }
        ],
        zIndex : 2,
      },
      drapeau: {
        width: 70,
        height: 80,
        position: 'absolute',
        top: this.state.y_drapeau - 60,
        left: this.state.x_drapeau + 8,
        zIndex : 1,
      },
      trou:
      {
        width: 35,
        height: 35,
        borderRadius: 60 / 2,
        backgroundColor: 'black',
        position: 'absolute',
        top: this.state.y_drapeau,
        left: this.state.x_drapeau,
        zIndex : 1,
      },
      textforce:
      {
        position: 'absolute',
        top: windowHeight * 0.896,
        left: windowWidth * 0.163,
        fontSize: 20,
        fontWeight: "bold",
        color: this.state.color_force,
        zIndex : 1,
      }
    });

    return (
      <>
        {this.state.show_menu ? (
          <MenuScreen startEasy={this.setLevelEasy} startMedium={this.setLevelMedium} startHard={this.setLevelHard} />
        ) : (
          <>
            {this.state.victory ? (
              <VictoryScreen score={this.state.nbCoups} bestScore={this.state.nbCoups} retourMenu={this.resetGame} />
            ) :
              this.state.defeat ? (
                <GameOverScreen bestScore={this.state.nbCoups} retourMenu={this.resetGame} />
              )
                : (
                  <TouchableOpacity activeOpacity={1} onPress={(e) => this.chooseBallDirection(e)} style={styles2.touchableScreen}>

                    <ImageBackground source={require('../img/terrain2.png')} resizeMode="cover" style={styles2.image}>

                      <Text style={styles2.coupRestant}>{this.state.nbCoups}/{nbCoupMax}</Text>

                      <Text style={styles.textforce}> Force = {this.state.speed} </Text>

                      {this.state.show_arrow ? (
                        <View style={styles.rectangle}>
                          <View style={styles2.triangle} />
                        </View>
                      ) : null}

                      <ImageBackground source={require('../img/mer.jpg')} resizeMode="cover" style={{ ...styles2.squarewater, top: this.state.y_mer, left: this.state.x_mer }} />
                      <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree, left: this.state.x_tree }} />
                      <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree2, left: this.state.x_tree2 }} />
                      <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree3, left: this.state.x_tree3 }} />
 <ImageBackground source={require('../img/sable.png')} resizeMode="cover" style={{ ...styles2.sand, top: this.state.y_sand, left: this.state.x_sand }} />

                      <View style={styles.trou} />

                      <ImageBackground source={require('../img/flag.png')} resizeMode="cover" style={styles.drapeau} />

                      <ImageBackground source={require('../img/balle.png')} resizeMode="cover" style={styles.styleball} />

                      <ImageBackground source={require('../img/flecheup.png')} resizeMode="cover" style={styles2.styleup}>
                        <Button onPress={this.increaseForce} />
                      </ImageBackground>

                      <ImageBackground source={require('../img/flechedo.png')} resizeMode="cover" style={styles2.styledo}>
                        <Button onPress={this.decreaseForce} />
                      </ImageBackground>

                      <TouchableHighlight style={styles2.buttonShoot} onPress={this.shootBall}>
                        <Text style={styles2.textShoot}>Tap to Shoot</Text>
                      </TouchableHighlight>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
          </>
        )}
      </>
    )
  }
}


const styles2 = StyleSheet.create({
  styleup: {
    position: 'absolute',
    top: windowHeight * 0.928,
    left: windowWidth * 0.070,
    flex: 1,
    justifyContent: "center",
    height: 60,
    width: 60,
    zIndex : 1,
  },
  styledo: {
    position: 'absolute',
    top: windowHeight * 0.928,
    left: windowWidth * 0.280,
    flex: 1,
    justifyContent: "center",
    height: 60,
    width: 60,
    zIndex : 1,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    marginLeft: 45,
    marginTop: -5,
    transform: [
      {
        rotate: 90 + 'deg'
      }
    ],
    zIndex : 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    zIndex : 1,
  },
  touchableScreen: {
    width: windowWidth,
    height: windowHeight,
    zIndex : 3,
  },
  buttonShoot:
  {
    position: 'absolute',
    top: windowHeight * 0.910,
    left: windowWidth * 0.550,
    height: 60,
    width: 160,
    backgroundColor: '#178033',
    zIndex : 1,
  },
  textShoot: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
zIndex : 1,
  },
  squarewater: {
    position: 'absolute',
    width: width_mer,
    height: height_mer,
    zIndex : 1,
  },
  tree: {
    position: 'absolute',
    width: width_tree,
    height: height_tree,
    zIndex : 1,
  },
  sand: {
    position: 'absolute',
    width: width_sand,
    height: height_sand,
    zIndex : 1,
  },
  coupRestant: {
    color: 'black',
    fontSize: 35,
    position: 'absolute',
    top: windowHeight * 0.0539,
    left: windowWidth * 0.4245,
    zIndex : 1,
  }
});

function touchtrees(monObjet, x_tree, y_tree) {

  if (monObjet.state.y <= y_tree + height_tree && monObjet.state.y + 30 >= y_tree && monObjet.state.x <= x_tree + width_tree && monObjet.state.x + 30 >= x_tree) {

    if (Math.abs(monObjet.state.x - (x_tree + width_tree)) < 3 || Math.abs(monObjet.state.x + 30 - x_tree) < 3) {
      monObjet.setState({ vx: -(monObjet.state.vx) })
    }
    if (Math.abs(monObjet.state.y - (y_tree + height_tree)) < 3 || Math.abs(monObjet.state.y + 30 - y_tree) < 3) {
      monObjet.setState({vy: -(monObjet.state.vy)})
    }

  }
}


export default Ball;
