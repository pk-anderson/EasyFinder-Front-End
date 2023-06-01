import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import FooterText from '../components/FooterText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

const logoImage = require('../assets/logo.png');

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function SignUpScreen({ navigation }: SignupScreenProps) {
  const handleSignUpPress = () => {
    console.log('Sign Up button pressed!');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
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
      <Input
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      <Input
        placeholder="Telefone"
        style={styles.input}
        keyboardType="phone-pad"
      />

      <Button
        text="CRIAR CONTA"
        textColor="#FFFFFF"
        backgroundColor="#00FF00"
        onPress={handleSignUpPress}
        style={styles.signupButton}
        textStyle={styles.signupButtonText}
      />
      <Button
        text="JÁ TEM CONTA? ENTRE AGORA"
        textColor="#FFFFFF"
        backgroundColor="#00FF00"
        onPress={handleLoginPress}
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
      />

    <FooterText text="By signing in, you agree to our Terms and Conditions. Learn how we use your data in our Privacy Policy" />
    </View>
  );
};

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
    marginBottom: 15,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: '#d3d3d3',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  signupButton: {
    marginTop: 35,
    backgroundColor: '#50924E',
    width: 300,
  },
  signupButtonText: {
    fontSize: 16,
  },
  loginButton: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#50924E',
    backgroundColor: '#FFFFFF',
    width: 300,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#50924E',
  },
});

export default SignUpScreen;