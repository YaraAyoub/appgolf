//create a program using react that make a ball move around the screen, when the ball hits the edge of the screen it should bounce back


//import react
import React, {useState} from "react";
import { Button } from 'react-native-paper';
import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";


//Constante Ã©cran
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//const obj = new Fleche();

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
      x: 200,
      y: 300,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      touchable: 1,
      height: 60,
      rotate: 0,
      speed: 0,
      test: props.firstname,
      show_arrow: 1,
      show_menu: 0,
      x_drapeau: 150,
      y_drapeau: 400,// MIN : windowHeight * 0.167 // MAX :  windowHeight * 0.78 
      x_touch: 0,
      y_touch: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickUP = this.handleClickUP.bind(this);
    this.handleClickDOWN = this.handleClickDOWN.bind(this);
    this.handleClickLEFT = this.handleClickLEFT.bind(this);
    this.handleClickRIGHT = this.handleClickRIGHT.bind(this);
    this.start = this.start.bind(this);
    this.handlePress = this.handlePress.bind(this);

  }
  //create a method called componentDidMount

  handleClick() {
    if (this.state.touchable == 1) {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        touchable: 0,
      })
      );
      this.moveBall();
    }

  }

  start() {
// le y doit etre a plus de 16.7 % de la taille de l ecran 
    let max_height = windowHeight * 0.777;
    let min_height = windowHeight * 0.167;
    let max_width = windowWidth * 0.841;
    let y_drapeau_bis = Math.random()*(max_height - min_height ) + min_height;
    let x_drapeau_bis = Math.random()*(max_width);

    this.setState(prevState => ({
      show_menu: 0,
      y_drapeau : y_drapeau_bis, 
      x_drapeau : x_drapeau_bis
    })
    );

  }

  getX() {
    return this.state.x;
  }

  handleClickUP() {
    let max_height = windowHeight * 0.777;
    let min_height = windowHeight * 0.167;
    let max_width = windowWidth * 0.841;
    let y_drapeau_bis = Math.random()*(max_height - min_height ) + min_height;
    let x_drapeau_bis = Math.random()*(max_width);

    let speed2 = this.state.speed + 2;
    this.setState({
      speed: speed2,
      y_drapeau : y_drapeau_bis, 
      x_drapeau : x_drapeau_bis
    })
    ;

  }

  handleClickRIGHT() {
    let rotate = this.state.rotate + 3;
    this.setState(({
      rotate: rotate,
    })
    );

  }
  handleClickDOWN() {
    let speed2 = this.state.speed - 2;
    this.setState(prevState => ({
      speed: speed2,
    })
    );

  }
  handleClickLEFT() {
    let rotate = this.state.rotate - 3;

    this.setState(prevState => ({
      rotate: rotate,
    })
    );

  }

  handlePress(e) {
    this.setState( {
      x_touch: e.nativeEvent.locationX,
      y_touch: e.nativeEvent.locationY,
    })
    ;
  }

  //create a method called moveBall
  moveBall() {

    //do some stuff
    setTimeout(this.moveBall.bind(this), 1);

    //if(this.state.test>=20)
    //{
    //create a variable called width and set it to the width of the window
    let width = window.innerWidth;
    //create a variable called height and set it to the height of the window
    let height = window.innerHeight;
    //create a variable called x and set it to the current x position of the ball
    let x = this.state.x;
    //create a variable called y and set it to the current y position of the ball
    let y = this.state.y;
    //create a variable called vx and set it to the current vx position of the ball
    let vx = this.state.vx;
    //create a variable called vy and set it to the current vy position of the ball
    let vy = this.state.vy;

    let rotate = this.state.rotate;

    let touchable = 0;

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
      vx = this.state.speed * 0.05;
      vy = this.state.speed * 0.05;
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

    if (vy != 0 && (nextY <= ((windowHeight * 10.6) / 100) || nextY >= ((windowHeight * 78.8) / 100))) {
      //set the vy position of the ball to the opposite of the current vy position of the ball
      // vy = -vy;
      vy = -vy;
      nextY = y + vy * Math.sin((rotate * 3.14) / 180);
      //  rotate = rotate +180;
    }

    if (Math.abs(vx) <= 0.0040 && Math.abs(vy) <= 0.0040) {
      vx = 0;
      vy = 0;
      touchable = 1;
      show_arrow = 1;
    }
    else {
      show_arrow = 0;
    }

    if (vx < 0) {
      vx = vx + 0.0030;
    }
    else if (vx > 0) {
      vx = vx - 0.0030;
    }
    if (vy < 0) {
      vy = vy + 0.0030;
    }
    else if (vy > 0) {
      vy = vy - 0.0030;
    }



    //set the state of the ball to the new x position, the new y position, the new vx position, the new vy position, the radius of the ball, and the color of the ball
    this.setState({
      x: x + vx * Math.cos((rotate * 3.14) / 180),
      y: y + vy * Math.sin((rotate * 3.14) / 180),
      vx: vx,
      vy: vy,
      radius: radius,
      color: color,
      // isToggleOn : toggle,
      prectoggle: prectoggle,
      touchable: touchable,
      rotate: rotate,
      show_arrow: show_arrow

    });

  }
  //else{
  //let test = this.state.test+1;
  //this.setState({
  // test : test,

  //    });
  //}
  //call the method moveBall after 10 milliseconds
  //}
  //create a method called render
  render() {

    let styles = StyleSheet.create({
      //create a variable called style and set it to an object with the properties of position, top, left, width, height, borderRadius, and backgroundColor
      styleball: {
        position: 'absolute',
        top: this.state.y,
        left: this.state.x,
        flex: 1,
        justifyContent: "center",
        height: 30,
        width: 30
      },
      styleup: {
        position: 'absolute',
        top: 470,
        left: 85,
        flex: 1,
        justifyContent: "center",
        height: 60,
        width: 60,
      },
      stylert: {
        position: 'absolute',
        top: 515,
        left: 150,
        flex: 1,
        justifyContent: "center",
        height: 60,
        width: 60,
      },
      stylelt: {
        position: 'absolute',
        top: 515,
        left: 20,
        flex: 1,
        justifyContent: "center",
        height: 60,
        width: 60,
      },
      styledo: {
        position: 'absolute',
        top: 560,
        left: 85,
        flex: 1,
        justifyContent: "center",
        height: 60,
        width: 60,
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
      force: {
        position: "absolute",
        top: this.state.y - 20,
        left: this.state.x
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
      touchable: {
        alignItems: 'center',
        backgroundColor: '#7986cb',
        padding: 10,
        marginTop: 30,
        borderRadius: 10,
      },
      touchableText: {
        color: 'white',
        fontSize: 20,
      },
      text: {
        color: 'black',
        fontSize: 40,
      },
      touchableScreen: {
        backgroundColor: 'lightgreen',
        width: windowWidth,
        height: windowHeight
      },
      image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
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
        width: 40,
        height: 40,
        borderRadius: 60 / 2,
        backgroundColor: 'black',
        position: 'absolute',
        top: this.state.y_drapeau,
        left: this.state.x_drapeau
      }

    });

    //return the ball
    return (
      <TouchableOpacity onPress={(e)=> this.handlePress(e)} style={styles.touchableScreen}>

<Text style={styles.text}>Coordinates: {this.state.x_touch}, {this.state.y_touch}</Text>

        {this.state.show_menu ? (

          <ImageBackground source={require('../img/bgMenu.png')} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Menu</Text>

            <TouchableOpacity style={styles.touchable} onPress={this.start}>
              <Text style={styles.touchableText}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.touchableText}>Crédits</Text>
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <>

            <ImageBackground source={require('../img/terrain1.png')} resizeMode="cover" style={styles.image}>
              {this.state.show_arrow ? (
                <View style={styles.rectangle}>
                  <View style={styles.triangle} />
                </View>
              ) : null}
              {this.state.show_arrow ? (
                <Text style={styles.force}> Force : {this.state.speed}</Text>
              ) : null}

              <View style={styles.trou} />
             
              <ImageBackground source={require('../img/flag.png')} resizeMode="cover" style={styles.drapeau}>
              </ImageBackground>
                          

              <ImageBackground source={require('../img/balle.png')} resizeMode="cover" style={styles.styleball}>
                <Button onPress={this.handleClick}></Button>
              </ImageBackground>

              <ImageBackground source={require('../img/flecheup.png')} resizeMode="cover" style={styles.styleup}>
                <Button onPress={this.handleClickUP}> </Button>
              </ImageBackground>
              <ImageBackground source={require('../img/flechert.png')} resizeMode="cover" style={styles.stylert}>
                <Button onPress={this.handleClickRIGHT}></Button>
              </ImageBackground>
              <ImageBackground source={require('../img/flechelt.png')} resizeMode="cover" style={styles.stylelt}>
                <Button onPress={this.handleClickLEFT}></Button>
              </ImageBackground>
              <ImageBackground source={require('../img/flechedo.png')} resizeMode="cover" style={styles.styledo}>
                <Button onPress={this.handleClickDOWN}></Button>
              </ImageBackground>
            </ImageBackground>
          </>
        )}

      </TouchableOpacity>
    );
  }
}
export default Ball;
