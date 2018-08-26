import React from 'react';
import {StyleSheet, 
        Text, 
        View, 
        TextInput, 
        TouchableOpacity, } from 'react-native';

export default class Form extends React.Component {
  render() {
    return (
      <View style= {styles.formContainer}>
        <TextInput style = {styles.textInput}
            placeholder = 'Username'
            placeholderTextColor = '#292929'
            returnKeyType = 'next'
            keyboardType = 'email-address'
            underlineColorAndroid = {'transparent'}/>

        <TextInput style = {styles.textInput}
            placeholder = 'Password'
            placeholderTextColor = '#292929'
            returnKeyType = 'go'
            secureTextEntry = {true}
            underlineColorAndroid = {'transparent'}/>    

        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.btntext}>LOGIN</Text>
        </TouchableOpacity>  
               
        </View>

    );
  }
}

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20,
    },

    textInput: {
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 20,
    },

    button: {
        alignSelf: 'stretch',
        
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
    },

    btntext: {
        color: '#fff',
        fontSize: 18,
    }



    
});
