import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require('./img/fondtest.png')} style={{height:800, width:370, resizeMode:'stretch',}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
