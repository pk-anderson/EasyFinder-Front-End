import React, { useState, useContext } from 'react';
import { StyleSheet, View, Image, TextInput, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import FooterText from '../components/FooterText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { VerifyLoginFields } from '../util/VerifyLoginFields';
import { userLogin } from '../api/user/Login';
import { AuthContext } from '../../AuthContext';
import { listLostObjects } from '../api/user/ListLostObjects';

const logoImage = require('../assets/logo.png');




type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function LoginScreen({ navigation }: LoginScreenProps) {
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const { setToken, setUserEmail } = useContext(AuthContext);
  
  const handleLoginPress = async () => {
    let isValid = VerifyLoginFields(inputEmail, inputPassword);
    if (isValid === undefined) return isValid;

    try {
      let response = await userLogin(inputEmail, inputPassword);
      console.log(response)
      if (response) {
        let { result, authorization } = response;

        if (result && result.has_error) {
          Alert.alert("Falha no Login", result.data);
        } else {
          setToken(authorization);
          setUserEmail(inputEmail);
          let itens = await listLostObjects(authorization!)
          console.log(itens)
          console.log(authorization)
          navigation.navigate('Dashboard', itens)
          // navigation.navigate('ProfileScreen', {email: inputEmail})
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignupPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Input
        onChangeText={text => setEmail(text)}
        placeholder="E-mail"
        style={styles.input}
      />
      <Input
        onChangeText={text => setPassword(text)}
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
    width: 225,
    height: 42,
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
