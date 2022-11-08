import {useState} from 'react';
import { Button } from 'react-native-paper';
import { ImageBackground, StyleSheet, Text, View, Dimensions, Animated, Switch } from "react-native";

//Constante Ã©cran
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Ball() {

    const [isToggleOn, setIsToggleOn] = useState(true);
    const [prectoggle, setPrectoggle] = useState(true);
    const [x, setX] = useState(200);
    const [y, setY] = useState(200);
    const [vx, setvx] = useState(10);
    const [vy, setvy] = useState(10);
    const [touchable, setTouchable] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [speed, setSpeed] = useState(0);

    const handleClick = () => {
        if (touchable == 1) {
            setTouchable(0);
            setIsToggleOn(!isToggleOn);
            moveBall();
        }
    }

    const handleClickUP = () => {
        setSpeed(speed + 2);
    }
    const handleClickRIGHT = () => {
        setRotate(rotate + 3);
    }
   const  handleClickDOWN = () => {
        setSpeed(speed - 2);
    }
   const handleClickLEFT = () => {
        setRotate(rotate - 3);
    }

   const moveBall = () => {
        //if the next x position of the ball is less than or equal to zero or greater than or equal to the width of the window minus the radius of the ball
        if (rotate < 0) {
            setRotate(360 + rotate);
        }
        if (rotate > 360) {
            setRotate(rotate - 360);
        }
        if (isToggleOn != prectoggle) {
            setPrectoggle(isToggleOn);
            setvx(speed* 0.05);
            setvy(speed* 0.05);    
            console.log("vx: " + vx);
            console.log("vy: " + vy); 
        }
    
        let nextX = x + vx * Math.cos((rotate * 3.14) / 180);
        //create a variable called nextY and set it to the current y position of the ball plus the current vy position of the ball
        let nextY = y + vy * Math.sin((rotate * 3.14) / 180);
    
    
        if (vx != 0 && (nextX <= 0 || nextX >= windowWidth - ((428 * 7.24) / 100))) {
            //set the vx position of the ball to the opposite of the current vx position of the ball
            setvx(-vx);
            nextX = x + vx * Math.cos((rotate * 3.14) / 180);
        }
        //if the next y position of the ball is less than or equal to zero or greater than or equal to the height of the window minus the radius of the ball
    
        if (vy != 0 && (nextY <= ((windowHeight * 10.6) / 100) || nextY >= ((windowHeight * 78.8) / 100))) {
            //set the vy position of the ball to the opposite of the current vy position of the ball
            // vy = -vy;
            setvy(-vy);
            nextY = y + vy * Math.sin((rotate * 3.14) / 180);
        }
    
        if (Math.abs(vx) <= 0.0040 && Math.abs(vy) <= 0.0040) {
            setvx(0);
            setvy(0);
            setTouchable(1);
        }
    
        if (vx < 0) {
            setvx(vx + 0.0030);
        }
        else if (vx > 0) {
            setvx(vx - 0.0030);
        }
        if (vy < 0) {
            setvy(vy + 0.0030);
        }
        else if (vy > 0) {
            setvy(vy - 0.0030);
        }
    
    setX(x + vx * Math.cos((rotate * 3.14) / 180));
    setY(y + vy * Math.sin((rotate * 3.14) / 180));
    
    }

    const styles = StyleSheet.create({
        styleball: {
            position: 'absolute',
            top: y,
            left: x,
            flex: 1,
            justifyContent: "center",
            height: 30,
            width: 30
        },
        styleup: {
            position: 'absolute',
            top: 500,
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
        styleArrow: {
    
            flex: 1,
            justifyContent: "center",
            height: 60,
            width: 6,
    
        },
        rectangle: {
            width: 60,
            height: 5,
            backgroundColor: "red",
            position: 'absolute',
            top: y + 12,
            left: x - 13,
    
            transform: [
                {
                    rotate: rotate + 'deg'
                }
    
            ],
        },
        force: {
            position: "absolute",
            top: y - 20,
            left: x
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
      });
    

    //return the ball
    return (
        <>
            <View style={styles.rectangle}>
                <View style={styles.triangle} />
            </View>
            <Text style={styles.force}> Force : {speed}</Text>

            <ImageBackground source={require('../img/balle.png')} resizeMode="cover" style={styles.styleball}>
                <Button onPress={handleClick}></Button>
            </ImageBackground>
            
            <ImageBackground source={require('../img/flecheup.png')} resizeMode="cover" style={styles.styleup}>
                <Button onPress={handleClickUP}></Button>
            </ImageBackground>
            <ImageBackground source={require('../img/flechert.png')} resizeMode="cover" style={styles.stylert}>
                <Button onPress={handleClickRIGHT}></Button>
            </ImageBackground>
            <ImageBackground source={require('../img/flechelt.png')} resizeMode="cover" style={styles.stylelt}>
                <Button onPress={handleClickLEFT}></Button>
            </ImageBackground>
            <ImageBackground source={require('../img/flechedo.png')} resizeMode="cover" style={styles.styledo}>
                <Button onPress={handleClickDOWN}></Button>
            </ImageBackground>

        </>
    );
}