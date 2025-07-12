import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AppManager from './manager/AppManager';
import {PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor={"lightpink"} barStyle='dark-content' />
      <PaperProvider>
           <AppManager/>
      </PaperProvider>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
