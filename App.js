import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

 speak = () => {
    var thingToSay = this.state.name;
    this.state.name === ''
      ? alert('Empty box. Enter a word.')
      : Speech.speak(thingToSay);
  };
  render() {
    return (
      <View>
        <Header
          backgroundColor={'#00bfff'}
          centerComponent={{
            text: 'Text To Speech Coverter',
            style: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
          }}
        />

        <Text style={styles.title}>Enter the word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.speak();
          }}>
          <Text style={styles.buttonText}>Click Here to hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17,
  },
  button: {
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: '#00bfff',
    padding: 5,
    width: 300,
    height: 70,
    borderWidth: 3,
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
