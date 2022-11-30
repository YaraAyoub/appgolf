import React from "react";
import { Button } from 'react-native-paper';
import { DevSettings, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";

import { VictoryScreen } from "../src/VictoryScreen";
import { GameOverScreen } from "../src/GameOverScreen";
import { MenuScreen } from '../src/MenuScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const height_tree = windowHeight * 0.09287;
const width_tree = windowWidth * 0.2948;
const height_sand = windowHeight * 0.1619;
const width_sand = windowWidth * 0.2830;
const width_cow = windowWidth * 0.21;
const height_cow = windowHeight * 0.0650;

let nbCoupMax = 5;

class Ball extends React.Component {
  //create a constructor
  constructor(props) {
    //call the super class constructor
    super(props);

    // This binding is necessary to make `this` work in the callback
    //set the initial state
    this.state = {
      height: windowHeight * 0.0647,
      isToggleOn: true,
      prectoggle: true,
      x: windowWidth * 0.1179,
      y: windowHeight * 0.1187,
      prev_x: 150,
      prev_y: 400,
      vx: 0,
      vy: 0,
      touchable: 1,
      rotate: 0,
      speed: 1,
      show_arrow: 1,
      show_menu: 1,
      x_drapeau: windowWidth * 0.2358,
      y_drapeau: windowHeight * 0.8099, // MIN : windowHeight * 0.167 // MAX :  windowHeight * 0.78 
      victory: 0,
      defeat: 0,
      x_touch: 0,
      y_touch: 0,
      color_force: 'green',
      height_mer: 130,
      width_mer: 275,
      height_mer2: 130,
      width_mer2: 275,
      x_mer: 10,
      y_mer: 400,
      x_mer2: 0,
      y_mer2: 230,
      x_tree: 190,
      y_tree: 200,//windowHeight * 0.6479, 
      x_tree2: windowWidth * 0.6,
      y_tree2: windowHeight * 0.7,
      x_tree3: windowWidth * 0.03,
      y_tree3: windowHeight * 0.6,
      x_tree4: windowWidth * 0.6,
      y_tree4: windowHeight * 0.7,
      x_tree5: windowWidth * 0.6,
      y_tree5: windowHeight * 0.7,
      x_sand: 290,
      y_sand: 450,
      nbCoups: 0,
      show_easy: 0,
      show_medium: 1,
      show_hard: 0,
      x_cow: 150,
      y_cow: 100,
      x_cow2: 150,
      y_cow2: 100,
      balle_dans_eau: 0,
      x_plouf: 0,
      y_plouf: 0,
      bestScore_easy: 0,
      bestScore_medium: 0,
      bestScore_hard: 0,
      shoot: 0,
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
      let vitesse_b = 0;
      if (this.state.speed > 0) {
        vitesse_b = 40 + 7 * this.state.speed;
      }
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        touchable: 0,
        nbCoups: this.state.nbCoups + 1,
        vx: vitesse_b * 0.05,
        vy: vitesse_b * 0.05,
shoot : 1,
      })
      );
    }
  }

  start() {

    this.setState(prevState => ({
      show_menu: 0,
      isToggleOn: true,
      prectoggle: true,
      x_drapeau: windowWidth * 0.2358,
      y_drapeau: windowHeight * 0.8099,
      vx: 0,
      vy: 0,
      touchable: 1,
      rotate: 0,
      speed: 1,
      show_arrow: 1,
      victory: 0,
      defeat: 0,
      x_touch: 0,
      y_touch: 0,
      color_force: 'green',
    })
    );
  }

  setLevelEasy() {
    nbCoupMax = 7;
    nbObsatcle = 2;
    this.setState({
      show_easy: 1,
      show_medium: 0,
      show_hard: 0,
      x: windowWidth * 0.1179,
      y: windowHeight * 0.1187,
      prev_x: windowWidth * 0.1179,
      prev_y: windowHeight * 0.1187,
      height_mer: windowHeight * 0.14038,
      width_mer: windowWidth * 0.64858,
      x_mer: windowWidth * 0.02358,
      y_mer: windowHeight * 0.4319,
      x_tree: windowWidth * 0.3301,
      y_tree: windowHeight * 0.2159,
      x_tree2: windowWidth * 0.6,
      y_tree2: windowHeight * 0.7,
      x_tree3: windowWidth * 0.03,
      y_tree3: windowHeight * 0.6,
      x_sand: windowWidth * 0.6839,
      y_sand: windowHeight * 0.42,
      balle_dans_eau: 0,
    });

    this.start()
  }

  setLevelMedium() {
    nbCoupMax = 5;
    nbObsatcle = 2;
    let width_mer = windowWidth * 0.4245;
    this.setState({
      show_easy: 0,
      show_medium: 1,
      show_hard: 0,
      x: windowWidth * 0.1179,
      y: windowHeight * 0.11,
      prev_x: windowWidth * 0.1179,
      prev_y: windowHeight * 0.1187,
      height_mer: windowHeight * 0.0971,
      width_mer: windowWidth * 0.4245,
      height_mer2: windowHeight * 0.0971,
      width_mer2: windowWidth * 0.4245,
      x_mer: 0,
      y_mer: windowHeight * 0.24838,
      x_mer2: windowWidth - width_mer,
      y_mer2: windowHeight * 0.24838,
      x_tree: windowWidth * 0.365,
      y_tree: windowHeight * 0.40496,
      x_tree2: windowWidth * 0.6,
      y_tree2: windowHeight * 0.7,
      x_tree3: windowWidth * 0.03,
      y_tree3: windowHeight * 0.6,
      x_sand: windowWidth * 0.6839,
      y_sand: windowHeight * 0.4859,
      y_cow: windowHeight * 0.37796,
      x_cow: 0,
      balle_dans_eau: 0,
    });
    this.start()
  }

  setLevelHard() {
    nbCoupMax = 5;
    nbObsatcle = 3;
    let width_mer = windowWidth * 0.1;
    this.setState({
      show_easy: 0,
      show_medium: 0,
      show_hard: 1,
      x: windowWidth * 0.1179,
      y: windowHeight * 0.11,
      prev_x: windowWidth * 0.1179,
      prev_y: windowHeight * 0.1187,
      height_mer: windowHeight * 0.45,
      width_mer: windowWidth * 0.2,
      height_mer2: windowHeight * 0.3,
      width_mer2: windowWidth * 0.2,
      x_mer: 0,
      y_mer: windowHeight * 0.42,
      x_mer2: windowWidth - 2 * width_mer,
      y_mer2: windowHeight * 0.55,

      x_tree: windowWidth * 0.7,
      y_tree: windowHeight * 0.21598,
      x_tree2: windowWidth * 0.7,
      y_tree2: windowHeight * 0.15 + 3 * (height_tree - windowHeight * 0.00539),
      x_tree3: windowWidth * 0.5,
      y_tree3: windowHeight * 0.75,
      x_tree4: windowWidth * 0.25,
      y_tree4: windowHeight * 0.55,
      x_sand: windowWidth * 0.3,
      y_sand: windowHeight * 0.3,
      y_cow: windowHeight * 0.2,
      x_cow: 0,
      y_cow2: windowHeight * 0.3239,
      x_cow2: windowWidth * 0.4009,
      balle_dans_eau: 0,
    });
    this.start()
  }


  resetGame() {
    this.setState({
      isToggleOn: true,
      prectoggle: true,
      x: windowWidth * 0.1179,
      y: windowHeight * 0.1187, // + 12 // -5 
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
    if (speed2 != 1) {
      speed2 -= 1;
    }
    if (speed2 < 3) {
      colortext = 'green';
    }
    else if (speed2 == 3 || speed2 == 4) {
      colortext = 'orange';
    }
    else if (speed2 == 5) {
      colortext = 'red';
    }
    this.setState(prevState => ({
      speed: speed2,
      color_force: colortext
    })
    );
  }

  chooseBallDirection(e) {
    if (this.state.shoot == 0) {
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
        rotate: orientation,
        balle_dans_eau: 0,
      })
    }
  }

  moveBall() {

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
    // if (toggle != prectoggle) {
    //   prectoggle = toggle;
    //   this.setState({ vx: vitesse_b * 0.05 })
    //   this.setState({ vy: vitesse_b * 0.05 })
    // }

    let nextX = x + this.state.vx * Math.cos((rotate * 3.14) / 180);
    //create a variable called nextY and set it to the current y position of the ball plus the current vy position of the ball
    let nextY = y + this.state.vy * Math.sin((rotate * 3.14) / 180);

    if (this.state.vx != 0 && (nextX <= 0 || nextX >= windowWidth - ((428 * 7.24) / 100))) {
      //set the vx position of the ball to the opposite of the current vx position of the ball
      let vit_x = this.state.vx;
      this.setState({ vx: -vit_x })
      nextX = x + this.state.vx * Math.cos((rotate * 3.14) / 180);
      // rotate = rotate + 180;
    }
    //if the next y position of the ball is less than or equal to zero or greater than or equal to the height of the window minus the radius of the ball
    if (this.state.vy != 0 && (nextY <= ((windowHeight * 10.6) / 100) || nextY >= ((windowHeight * 85.5) / 100))) {
      //set the vy position of the ball to the opposite of the current vy position of the ball
      // vy = -vy;
      let vit_y = this.state.vy;
      this.setState({ vy: -vit_y })
      nextY = y + this.state.vy * Math.sin((rotate * 3.14) / 180);
      //  rotate = rotate +180;
    }

    touchtrees(this, this.state.x_tree, this.state.y_tree);
    touchtrees(this, this.state.x_tree2, this.state.y_tree2);
    touchtrees(this, this.state.x_tree3, this.state.y_tree3);
    if (this.state.show_medium == 1 || this.state.show_hard == 1) {
      touchcow(this, this.state.x_cow, this.state.y_cow);
      if (this.state.show_hard == 1) {
        touchtrees(this, this.state.x_tree4, this.state.y_tree4);
        touchcow(this, this.state.x_cow2, this.state.y_cow2);
      }
    }

    let vx = this.state.vx;
    //create a variable called vy and set it to the current vy position of the ball
    let vy = this.state.vy;



    if (x_drapeau + 8 >= x && x_drapeau - 4 <= x && y_drapeau - 4 <= y && y <= y_drapeau + 8 && vx <= 2.7 && vy <= 2.7) {
      vx = 0;
      vy = 0;
      victory = 1;
      let score = (nbCoupMax - this.state.nbCoups) + 1;
      if (score > this.state.bestScore_easy && this.state.show_easy == 1) {
        this.setState({ bestScore_easy: score });
      }
      else if (score > this.state.bestScore_medium && this.state.show_medium == 1) {
        this.setState({ bestScore_medium: score });
      }
      else if (score > this.state.bestScore_hard && this.state.show_hard == 1) {
        this.setState({ bestScore_hard: score });
      }
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
      this.setState({shoot : 0});
    }
    else {
      show_arrow = 0;
    }

    if (vx < 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand) {
        vx = vx + 0.0300;
      }
      else {
        vx = vx + 0.0200;
      }
    }
    else if (vx > 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand) {
        vx = vx - 0.0300;
      }
      else {
        vx = vx - 0.0200;
      }
    }
    if (vy < 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand) {
        vy = vy + 0.0300;
      }
      else {
        vy = vy + 0.0200;
      }
    }
    else if (vy > 0) {
      if (y <= this.state.y_sand + height_sand && y + 30 >= this.state.y_sand && x <= this.state.x_sand + width_sand && x + 30 >= this.state.x_sand) {
        vy = vy - 0.0300;
      }
      else {
        vy = vy - 0.0200;
      }
    }

    let touchseas = touchsea(this, this.state.x_mer, this.state.y_mer);
    let touchseas2 = touchsea(this, this.state.x_mer2, this.state.y_mer2);
    let x_plouf = this.state.x_plouf;
    let y_plouf = this.state.y_plouf;
    if (this.state.show_easy == 1) {
      touchseas2 = 0;
    }
    // verifie si la balle entre en collision avec un obstacle
    if (touchseas == 1 || (touchseas2 == 1 && this.state.show_easy != 1)) {
      if((x >= this.state.x_mer + this.state.width_mer -20 && touchseas == 1) || (x >= this.state.x_mer2 + this.state.width_mer2 -20) && touchseas2 == 1)
      {
         x_plouf = x -50;
      }
      else if(x <= this.state.x_mer +50 && touchseas == 1|| ((x <= this.state.x_mer2 +50) && touchseas2 == 1))
      {
         x_plouf = x +30;
      }
      else
      {
      x_plouf = x;
      }
      if((y >= this.state.y_mer + this.state.height_mer -20 && touchseas == 1)  || (y >= this.state.y_mer2 + this.state.height_mer2-20) && touchseas2 == 1)
      {
         y_plouf = y -50;
      }
      else
      {
      y_plouf = y;
      }
      x = prev_x;
      y = prev_y;
      vx = 0;
      vy = 0;
      touchable = 1;
      show_arrow = 1;
      this.setState({ balle_dans_eau: 1 });
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
      defeat: defeat,
      x_plouf: x_plouf,
      y_plouf: y_plouf,
    });
  }

  moveCow() {
    let x_cow = this.state.x_cow;
    let vx_cow = this.state.vx_cow;
    x_cow += vx_cow;
    if (x_cow >= windowWidth - width_cow) {
      vx_cow = -1;
    }
    if (x_cow <= 0) {
      vx_cow = 1;
    }
    this.setState({
      x_cow: x_cow,
      vx_cow: vx_cow,
    });
  }

  render() {
    if (this.state.vx != 0) {
      var intervalID = setTimeout(() => { this.moveBall() }, 1);
    }
    // if(this.state.show_medium == 1 && this.state.move_cow == 1)
    //  {
    //  var intervalID2 = setTimeout(() => {this.moveCow()}, 10);

    // }
    let styles = StyleSheet.create({
      styleball: {
        position: 'absolute',
        top: this.state.y,
        left: this.state.x,
        flex: 1,
        justifyContent: "center",
        height: 30,
        width: 30,
        shadowColor: 'black',
        zIndex: 3,
      },
      rectangle: {
        width: this.state.height,
        height: windowHeight * 0.00539,
        backgroundColor: "red",
        position: 'absolute',
        top: this.state.y + windowHeight * 0.01295,
        left: this.state.x - windowWidth * 0.03066,
        transform: [
          {
            rotate: this.state.rotate + 'deg'
          }
        ],
        zIndex: 2,
      },
      drapeau: {
        width: 70,
        height: 80,
        position: 'absolute',
        top: this.state.y_drapeau - 60,
        left: this.state.x_drapeau + 8,
        zIndex: 1,
      },
      squarewater: {
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
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
        zIndex: 1,
      },
      textforce:
      {
        position: 'absolute',
        top: windowHeight * 0.896,
        left: windowWidth * 0.163,
        fontSize: 20,
        fontWeight: "bold",
        color: this.state.color_force,
        zIndex: 1,
      },
      vache:
      {
        position: 'absolute',
        top: this.state.y_cow,
        left: this.state.x_cow,
        width: width_cow,
        height: height_cow,
        zIndex: 2,
      },
      plouf:
      {
        position: 'absolute',
        top: this.state.y_plouf,
        left: this.state.x_plouf,
        width: windowWidth * 0.17688,
        height: windowHeight * 0.08099,
        zIndex: 2,
      }
    });

    return (
      <>

        {this.state.show_menu ? (
          <MenuScreen startEasy={this.setLevelEasy} startMedium={this.setLevelMedium} startHard={this.setLevelHard} />
        ) : (
          <>
            {this.state.victory ? (
              <>
                {this.state.show_easy ? (

                  <VictoryScreen score={(nbCoupMax - this.state.nbCoups) + 1} bestScore={this.state.bestScore_easy} retourMenu={this.resetGame} />
                ) : null}
                {this.state.show_medium ? (
                  <VictoryScreen score={(nbCoupMax - this.state.nbCoups) + 1} bestScore={this.state.bestScore_medium} retourMenu={this.resetGame} />) : null}
                {this.state.show_hard ? (
                  <VictoryScreen score={(nbCoupMax - this.state.nbCoups) + 1} bestScore={this.state.bestScore_hard} retourMenu={this.resetGame} />) : null}
              </>

            ) :
              this.state.defeat ? (
                <>
                  {this.state.show_easy ? (

                    <GameOverScreen bestScore={this.state.bestScore_easy} retourMenu={this.resetGame} />

                  ) : null}
                  {this.state.show_medium ? (
                    <GameOverScreen bestScore={this.state.bestScore_medium} retourMenu={this.resetGame} />
                  ) : null}
                  {this.state.show_hard ? (
                    <GameOverScreen bestScore={this.state.bestScore_hard} retourMenu={this.resetGame} />
                  ) : null}
                </>
              )
                : (


                  <ImageBackground source={require('../img/terrain2.png')} resizeMode="cover" style={styles2.image}>

                    <Text style={styles2.coupRestant}>{this.state.nbCoups}/{nbCoupMax}</Text>


                    <Text style={styles.textforce}> Force = {this.state.speed} </Text>

                    {this.state.show_arrow ? (
                      <View style={styles.rectangle}>
                        <View style={styles2.triangle} />
                      </View>
                    ) : null}

                    <ImageBackground source={require('../img/mer2.gif')} resizeMode="cover" style={{ ...styles.squarewater, top: this.state.y_mer, left: this.state.x_mer, width: this.state.width_mer, height: this.state.height_mer }} />
                    <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree, left: this.state.x_tree }} />
                    <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree2, left: this.state.x_tree2 }} />
                    <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree3, left: this.state.x_tree3 }} />
                    <ImageBackground source={require('../img/sable.png')} resizeMode="cover" style={{ ...styles2.sand, top: this.state.y_sand, left: this.state.x_sand }} />
                    {this.state.show_medium ? (
                      <>
                        <ImageBackground source={require('../img/mer2.gif')} resizeMode="cover" style={{ ...styles.squarewater, top: this.state.y_mer2, left: this.state.x_mer2, width: this.state.width_mer2, height: this.state.height_mer2 }} />
                        <ImageBackground source={require('../img/vache.png')} resizeMode="cover" style={{ ...styles.vache }} />
                      </>
                    ) : null}
                    {this.state.show_hard ? (
                      <>
                        <ImageBackground source={require('../img/mer2.gif')} resizeMode="cover" style={{ ...styles.squarewater, top: this.state.y_mer2, left: this.state.x_mer2, width: this.state.width_mer2, height: this.state.height_mer2 }} />
                        <ImageBackground source={require('../img/vache.png')} resizeMode="cover" style={{ ...styles.vache, top: this.state.y_cow, left: this.state.x_cow, transform: [{ scaleX: 1 }] }} />
                        <ImageBackground source={require('../img/vache.png')} resizeMode="cover" style={{ ...styles.vache, top: this.state.y_cow2, left: this.state.x_cow2, transform: [{ scaleX: -1 }] }} />
                        <ImageBackground source={require('../img/arbre.png')} resizeMode="cover" style={{ ...styles2.tree, top: this.state.y_tree4, left: this.state.x_tree4 }} />
                      </>
                    ) : null}
                    <View style={styles.trou} />

                    <ImageBackground source={require('../img/flag.png')} resizeMode="cover" style={styles.drapeau} />
                    {this.state.balle_dans_eau ? (
                      <ImageBackground source={require('../img/plouf.gif')} resizeMode="cover" style={styles.plouf} />) : null}


                    <ImageBackground source={require('../img/balle.png')} resizeMode="cover" style={styles.styleball} />


                    <ImageBackground source={require('../img/flecheup.png')} resizeMode="cover" style={styles2.styleup}>
                      <Button onPress={this.increaseForce} />
                    </ImageBackground>

                    <ImageBackground source={require('../img/flechedo.png')} resizeMode="cover" style={styles2.styledo}>
                      <Button onPress={this.decreaseForce} />
                    </ImageBackground>
                    <TouchableOpacity activeOpacity={1} onPress={(e) => this.chooseBallDirection(e)} style={styles2.touchableScreen} />
                    <TouchableHighlight style={styles2.buttonShoot} onPress={this.shootBall}>
                      <Text style={styles2.textShoot}>Tap to Shoot</Text>
                    </TouchableHighlight>
                  </ImageBackground>

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
    zIndex: 1,
  },
  styledo: {
    position: 'absolute',
    top: windowHeight * 0.928,
    left: windowWidth * 0.280,
    flex: 1,
    justifyContent: "center",
    height: 60,
    width: 60,
    zIndex: 1,
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
    zIndex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    zIndex: 1,
  },
  touchableScreen: {
    width: windowWidth,
    height: windowHeight - windowHeight * 0.1360,
    zIndex: 3,
  },
  buttonShoot:
  {
    position: 'absolute',
    top: windowHeight * 0.910,
    left: windowWidth * 0.550,
    height: 60,
    width: 160,
    backgroundColor: '#178033',
    zIndex: 1,
  },
  textShoot: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    zIndex: 1,
  },
  tree: {
    position: 'absolute',
    width: width_tree,
    height: height_tree,
    zIndex: 1,
  },
  sand: {
    position: 'absolute',
    width: width_sand,
    height: height_sand,
    zIndex: 1,
  },
  coupRestant: {
    color: 'black',
    fontSize: 35,
    position: 'absolute',
    top: windowHeight * 0.0539,
    left: windowWidth * 0.4245,
    zIndex: 1,
  },

});

function touchtrees(monObjet, x_tree, y_tree) {
  let vx = monObjet.state.vx;
  let vy = monObjet.state.vy;
  if (monObjet.state.y <= y_tree + height_tree && monObjet.state.y + 30 >= y_tree && monObjet.state.x <= x_tree + width_tree && monObjet.state.x + 30 >= x_tree) {

    if (Math.abs(monObjet.state.x - (x_tree + width_tree)) < 3 || Math.abs(monObjet.state.x + 30 - x_tree) < 3) {
      monObjet.setState({ vx: -vx })
    }
    if (Math.abs(monObjet.state.y - (y_tree + height_tree)) < 3 || Math.abs(monObjet.state.y + 30 - y_tree) < 3) {
      monObjet.setState({ vy: -vy })
    }

  }
}

function touchsea(monObjet, x_mer, y_mer) {
  if (monObjet.state.y <= y_mer + monObjet.state.height_mer && monObjet.state.y + 30 >= y_mer && monObjet.state.x <= x_mer + monObjet.state.width_mer && monObjet.state.x + 30 >= x_mer) {
    return 1;
  }
  return 0;
}

function touchcow(monObjet, x_cow, y_cow) {
  if (monObjet.state.y <= y_cow + height_cow && monObjet.state.y + 30 >= y_cow && monObjet.state.x <= x_cow + width_cow && monObjet.state.x + 30 >= x_cow) {
    let vx = monObjet.state.vx;
    let vy = monObjet.state.vy;
    if (Math.abs(monObjet.state.x - (x_cow + width_cow)) < 3 || Math.abs(monObjet.state.x + 30 - x_cow) < 3) {
      monObjet.setState({ vx: -vx })
    }
    if (Math.abs(monObjet.state.y - (y_cow + height_cow)) < 3 || Math.abs(monObjet.state.y + 30 - y_cow) < 3) {
      monObjet.setState({ vy: -vy })
    }

  }
}


export default Ball;
