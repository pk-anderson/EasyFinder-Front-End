import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './src/components/Button';

const logoImage = require('./src/assets/logo.jpg');

export default function App() {
  const handleLoginPress = () => {
    console.log('Login button pressed!');
  };

  const handleSignupPress = () => {
    console.log('Signup button pressed!');
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Button
        text="FAZER LOGIN"
        textColor="#FFFFFF"
        backgroundColor="#00FF00"
        onPress={handleLoginPress}
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
      />
      <Button
        text="CADASTRE-SE"
        textColor="#00FF00"
        backgroundColor="#FFFFFF"
        onPress={handleSignupPress}
        style={styles.signupButton}
        textStyle={styles.signupButtonText}
      />
      <Text style={styles.footerText}>
        By signing in, you agree to our Terms and Conditions. Learn how we use your data in our Privacy Policy.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 20,
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#50924E',
    width: 250,
    height: 50,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signupButton: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#50924E',
  },
  signupButtonText: {
    color: '#50924E',
    fontSize: 16,
  },
  footerText: {
    color: '#808080',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    bottom: 0,
    position: 'absolute'
  },
});