//https://reactnativeexample.com/a-simple-calculator-application-built-using-react-native-expo-and-typescript/

//importieren der React-Komponenten
import { StyleSheet, Text, View } from 'react-native';
import Keypad from './src/Keypad';

export default function App() {
  return (
    <View style={[styles.container,{backgroundColor: 'black'}]}>
      <View style={styles.toolbar}>
      </View>
      <Keypad/>
    </View>

  );
}

//style der Anwendung bzw. der Komponenten
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  toolbar:{
    marginTop:10,
    height:70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%'
  }
});
