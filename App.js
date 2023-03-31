import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Valores from './src/Valores';

const min = Math.ceil(min);
const max = Math.floor(max - min);


export default function App() {

  
  return ( 
    <View style={styles.container}>
      <Valores min={Math.floor((Math.random() * 10) + 1)} max={Math.floor((Math.random() * 10) + 1)}></Valores>
      <Valores min={Math.floor((Math.random() * 10) + 1)} max={Math.floor((Math.random() * 10) + 1)}></Valores>
      <Valores min={Math.floor((Math.random() * 10) + 1)} max={Math.floor((Math.random() * 10) + 1)}></Valores>
      <Valores min={Math.floor((Math.random() * 10) + 1)} max={Math.floor((Math.random() * 10) + 1)}></Valores>
      <Valores min={Math.floor((Math.random() * 10) + 1)} max={Math.floor((Math.random() * 10) + 1)}></Valores>
      {/* <Valores min={3} max={60}></Valores>
      <Valores min={9} max={100}></Valores> */}
      <Image style={styles.image}
            source={require('./assets/elefante.png')}
            />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    alignContent: 'center',
    marginTop: 70, 
  }
});
