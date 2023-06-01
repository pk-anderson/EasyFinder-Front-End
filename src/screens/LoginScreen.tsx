import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import FooterText from '../components/FooterText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

const logoImage = require('../assets/logo.png');

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function LoginScreen({ navigation }: LoginScreenProps) {
  const handleLoginPress = () => {
    console.log('Login button pressed!');
  };

  const handleSignupPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Input
        placeholder="Nome de usuário"
        style={styles.input}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />
      <Button
        text="ENTRAR"
        textColor="#FFFFFF"
        backgroundColor="#00FF00"
        onPress={handleLoginPress}
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
      />
      <Button
        text="NÃO TEM CONTA? CADASTRE-SE"
        textColor="#00FF00"
        backgroundColor="#FFFFFF"
        onPress={handleSignupPress}
        style={styles.signupButton}
        textStyle={styles.signupButtonText}
      />
      <FooterText text="By signing in, you agree to our Terms and Conditions. Learn how we use your data in our Privacy Policy" />
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
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: '#d3d3d3',
    marginBottom: 25,
    paddingHorizontal: 10,
    borderWidth: 1,

    borderRadius: 20,
  },
  loginButton: {
    marginTop: 100,
    backgroundColor: '#50924E',
    width: 300,
  },
  loginButtonText: {
    fontSize: 16,
  },
  signupButton: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#50924E',
    width: 300,
  },
  signupButtonText: {
    fontSize: 16,
    color: '#50924E',
  },
});

export default LoginScreen;