import React from 'react';
import { Button, 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  ImageBackground, 
  TouchableOpacity,
  } from 'react-native';

import Form from './app/components/Form';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <ImageBackground  style={styles.container} source={require('./app/images/snowymountain.jpg')}>
              <Text style={styles.header}></Text>
              <Form/>
          </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },

  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
  }
});
