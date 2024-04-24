/// AULA SUJEITO PROGRAMADOR: 16:00

import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Minhas Senhas</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("./assets/logo.png")}
        style= {styles.logo}
      />
      <Text style={styles.tittle}>20 Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={8}
          maximumValue={20}
          maximumTrackTintColor='orange'
          minimumTrackTintColor='blue'
          thumbTintColor='#f3f3f3'
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>
          Gerar senha
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40
  },
  tittle: {
    fontWeight: 'bold',
    color: 'blue'
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8
  },
  button: {
    padding: 12,
    marginBottom: 14,
    marginTop: 14,
    backgroundColor: '#FFF',
    borderRadius: 8
  },
  textBtn: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
  },
  header: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20
  },
});
