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
      if (response) {
        let { result, authorization } = response;

        if (result && result.has_error) {
          Alert.alert("Falha no Login", result.data);
        } else {
          setToken(authorization);
          setUserEmail(inputEmail);
          let itens = await listLostObjects(authorization!)
          navigation.navigate('Dashboard', itens)
          // navigation.navigate('ProfileScreen')
        }
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
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
        placeholderTextColor={"#838383"}
        style={styles.input}
      />
      <Input
        onChangeText={text => setPassword(text)}
        placeholder="Senha"
        placeholderTextColor={"#838383"}
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
        text="CADASTRE-SE"
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
    height: 50,
    backgroundColor: '#fcfcfc',
    marginBottom: 25,
    paddingHorizontal: 10,
    fontSize: 18,
    color:'#686868',
    borderWidth: 0.3,
    borderColor:'#9c9c9c',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},

  },
  loginButton: {
    marginTop: 100,
    backgroundColor: '#50924E',
    width: 300,
    height:50,
    borderWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight:'bold',
  },
  signupButton: {
    marginTop: 25,
    borderWidth: 0.3,
    height:50,
    borderColor: '#50924E',
    width: 300,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  signupButtonText: {
    fontSize: 16,
    color: '#50924E',
    fontWeight:'bold',
  },
});

export default LoginScreen;
