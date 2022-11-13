import React from "react";
import { Button } from 'react-native-paper';
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";

import { VictoryScreen } from "../src/VictoryScreen";
import { GameOverScreen } from "../src/GameOverScreen";
import { MenuScreen } from '../src/MenuScreen';

//Constante écran
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const height_mer = 90;
const width_mer = 300;

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
      x: 50,
      y: 150, // + 12 // -5 
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
      show_menu: 1,
      x_drapeau: 100,
      y_drapeau: 650, // MIN : windowHeight * 0.167 // MAX :  windowHeight * 0.78 
      victory: 0,
      defeat: 0,
      x_touch: 0,
      y_touch: 0,
      color_force: 'green',
      x_mer: 0,
      y_mer: windowHeight*0.4859,
      nbCoups: 0,
    };

    this.shootBall = this.shootBall.bind(this);
    this.increaseForce = this.increaseForce.bind(this);
    this.decreaseForce = this.decreaseForce.bind(this);
    this.start = this.start.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.chooseBallDirection = this.chooseBallDirection.bind(this);
    //this.timer = this.timer.bind(this);
  }

  // function called when the button "tap to shoot" is clicked
  shootBall() {
    if (this.state.touchable == 1) {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        touchable: 0,
      })
      );
      this.state.nbCoups = this.state.nbCoups + 1;
      this.moveBall();

      if (this.state.nbCoups == 6) {
        this.state.defeat = 1;
      }
    }
  }

  start() {
    let max_height = windowHeight * 0.777;
    let min_height = windowHeight * 0.7019;
    let max_width = windowWidth * 0.841;
    let y_drapeau_bis = Math.random() * (max_height - min_height) + min_height;
    let x_drapeau_bis = Math.random() * (max_width);

    this.setState(prevState => ({
      show_menu: 0,
      y_drapeau: y_drapeau_bis,
      x_drapeau: x_drapeau_bis, 
      x : windowWidth*0.1779,
      y : windowHeight * 0.1619,
    })
    );
  }

  resetGame() {
    this.setState({
      isToggleOn: true,
      prectoggle: true,
      x: 155,
      y: 395, // + 12 // -5 
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
    if (speed2 < 4) {
      colortext = 'green';
    }
    else if (speed2 >= 4 && speed2 <= 7) {
      colortext = 'orange';
    }
    else if (speed2 >= 8) {
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
    let vx = this.state.vx;
    //create a variable called vy and set it to the current vy position of the ball
    let vy = this.state.vy;

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
      vx = vitesse_b * 0.05;
      vy = vitesse_b * 0.05;
    }

    let nextX = x + vx * Math.cos((rotate * 3.14) / 180);
    //create a variable called nextY and set it to the current y position of the ball plus the current vy position of the ball
    let nextY = y + vy * Math.sin((rotate * 3.14) / 180);

    if (vx != 0 && (nextX <= 0 || nextX >= windowWidth - ((428 * 7.24) / 100))) {
      //set the vx position of the ball to the opposite of the current vx position of the ball
      vx = -vx;
      nextX = x + vx * Math.cos((rotate * 3.14) / 180);
      // rotate = rotate + 180;
    }
    //if the next y position of the ball is less than or equal to zero or greater than or equal to the height of the window minus the radius of the ball

    if (vy != 0 && (nextY <= ((windowHeight * 10.6) / 100) || nextY >= ((windowHeight * 85.5) / 100))) {
      //set the vy position of the ball to the opposite of the current vy position of the ball
      // vy = -vy;
      vy = -vy;
      nextY = y + vy * Math.sin((rotate * 3.14) / 180);
      //  rotate = rotate +180;
    }

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
    }
    else {
      show_arrow = 0;
    }

    if (vx < 0) {
      vx = vx + 0.0200;
    }
    else if (vx > 0) {
      vx = vx - 0.0200;
    }
    if (vy < 0) {
      vy = vy + 0.0200;
    }
    else if (vy > 0) {
      vy = vy - 0.0200;
    }

    if (y <= this.state.y_mer + height_mer && y+30 >= this.state.y_mer && x <= this.state.x_mer + width_mer && x +30>= this.state.x_mer) {
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
      prev_y: prev_y
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
        width: 30
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
      },
      drapeau: {
        width: 70,
        height: 80,
        position: 'absolute',
        top: this.state.y_drapeau - 60,
        left: this.state.x_drapeau + 8
      },
      trou:
      {
        width: 35,
        height: 35,
        borderRadius: 60 / 2,
        backgroundColor: 'black',
        position: 'absolute',
        top: this.state.y_drapeau,
        left: this.state.x_drapeau
      },
      textforce:
      {
        position: 'absolute',
        top: windowHeight * 0.896,
        left: windowWidth * 0.163,
        fontSize: 20,
        fontWeight: "bold",
        color: this.state.color_force
      }
    });

    return (
      <>
        {this.state.show_menu ? (
          <MenuScreen startGame={this.start} />
        ) : (
          <>
            {this.state.victory ?(
              <VictoryScreen score={this.state.nbCoups} bestScore={this.state.nbCoups} retourMenu={this.resetGame} />
            ):
            this.state.defeat ?(
              <GameOverScreen bestScore={this.state.nbCoups} retourMenu={this.resetGame} />
            )
            : (
              <TouchableOpacity activeOpacity={1} onPress={(e) => this.chooseBallDirection(e)} style={styles2.touchableScreen}>

                <ImageBackground source={require('../img/terrain2.png')} resizeMode="cover" style={styles2.image}>

                  <Text style={styles2.coupRestant}>{this.state.nbCoups}</Text>

                  <Text style={styles.textforce}> Force = {this.state.speed} </Text>

                  {this.state.show_arrow ? (
                    <View style={styles.rectangle}>
                      <View style={styles2.triangle} />
                    </View>
                  ) : null}
                  <ImageBackground source={require('../img/mer.jpg')} resizeMode="cover" style={{ ...styles2.squarewater, top: this.state.y_mer, left : this.state.x_mer}} />

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
  },
  styledo: {
    position: 'absolute',
    top: windowHeight * 0.928,
    left: windowWidth * 0.280,
    flex: 1,
    justifyContent: "center",
    height: 60,
    width: 60,
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
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  touchableScreen: {
    width: windowWidth,
    height: windowHeight
  },
  buttonShoot:
  {
    position: 'absolute',
    top: windowHeight * 0.910,
    left: windowWidth * 0.550,
    height: 60,
    width: 160,
    backgroundColor: '#178033',
  },
  textShoot: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20

  },
  squarewater: {
    position: 'absolute',
    width: width_mer,
    height: height_mer,
  },
  coupRestant: {
    flex: 1,
    margin: 12,
    color: 'black',
    fontSize: 35,
  }
});

export default Ball;