import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import Input from '../components/Input';
import FooterText from '../components/FooterText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

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
  console.log(phoneNumber)
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
    homeNumber: 0,
  });

  const handleSignUpPress = async () => {
    try {
      const formattedPhone = formatPhoneNumber(formData.phoneNumber);
      const dataToSend = { ...formData, phoneNumber: formattedPhone };
      console.log(dataToSend)
      const response = await axios.post('http://localhost:8080/user', dataToSend);
      console.log('Cadastro realizado com sucesso!', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
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
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />
      <Input
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <Input
        placeholder="Telefone"
        style={styles.input}
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
      />
      <Input
        placeholder="Estado"
        style={styles.input}
        value={formData.state}
        onChangeText={(text) => setFormData({ ...formData, state: text })}
      />
      <Input
        placeholder="Rua"
        style={styles.input}
        value={formData.street}
        onChangeText={(text) => setFormData({ ...formData, street: text })}
      />
      <Input
      placeholder={formData.homeNumber === 0 ? 'Número' : ''}
      style={styles.input}
      keyboardType="numeric"
      value={formData.homeNumber === 0 ? '' : formData.homeNumber.toString()}
      onChangeText={(text) =>
        setFormData({ ...formData, homeNumber: parseInt(text) || 0 })
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
    marginBottom: 25,
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
