import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import Input from '../components/Input';
import FooterText from '../components/FooterText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { userCreate } from '../api/user/SignUp';

const logoImage = require('../assets/logo.png');

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}

function SignUpScreen({ navigation }: SignupScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    state: '',
    street: '',
    homeNumber: '',
  });

  const handleSignUpPress = async () => {
    try {
      const formattedPhone = formatPhoneNumber(formData.phoneNumber);
      const dataToSend = { ...formData, phoneNumber: formattedPhone };
      let isCreated = await userCreate(
        dataToSend.name,
        dataToSend.password,
        dataToSend.email,
        dataToSend.phoneNumber,
        dataToSend.state,
        dataToSend.street,
        dataToSend.homeNumber,
      );
      if (isCreated.has_error) {
        return Alert.alert("Falha no Cadastro", isCreated.data);
      } else {
        Alert.alert("Cadastro Realizado", isCreated.data);
        navigation.navigate("Login");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao processar o cadastro.");
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Input
        placeholder="Nome de usuário"
        placeholderTextColor={"#838383"}
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <Input
        placeholder="Senha"
        placeholderTextColor={"#838383"}
        secureTextEntry
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />
      <Input
        placeholder="Email"
        placeholderTextColor={"#838383"}
        style={styles.input}
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <Input
        placeholder="Telefone"
        placeholderTextColor={"#838383"}
        style={styles.input}
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
      />
      <Input
        placeholder="Estado"
        placeholderTextColor={"#838383"}
        style={styles.input}
        value={formData.state}
        onChangeText={(text) => setFormData({ ...formData, state: text })}
      />
      <Input
        placeholder="Rua"
        placeholderTextColor={"#838383"}
        style={styles.input}
        value={formData.street}
        onChangeText={(text) => setFormData({ ...formData, street: text })}
      />
      <Input
      placeholder="Número"
      placeholderTextColor={"#838383"}
      style={styles.input}
      keyboardType="numeric"
      value={formData.homeNumber}
      onChangeText={(text) =>
        setFormData({ ...formData, homeNumber: text })
      }
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 225,
    height: 42,
    marginBottom: 50,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fcfcfc',
    marginBottom: 15,
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
  signupButton: {
    marginTop: 35,
    height:50,
    backgroundColor: '#50924E',
    width: 300,
    borderWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  signupButtonText: {
    fontSize: 16,
  },
  loginButton: {
    marginTop: 25,
    height:50,
    marginBottom: 25,
    borderWidth: 0.3,
    borderColor: '#50924E',
    backgroundColor: '#FFFFFF',
    width: 300,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  loginButtonText: {
    fontSize: 16,
    color: '#50924E',
  },
});

export default SignUpScreen;
