import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from './src/components/Button';
import FooterText from './src/components/FooterText';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignUpScreen';
import { RootStackParamList } from './routes';
import DashboardScreen from './src/screens/DashBoard';
import LostItemScreen from './src/screens/LostItemScreen'
import RegisterItemScreen from './src/screens/RegisterItem';
import { AuthProvider } from './AuthContext';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import LostItemByUserScreen from './src/screens/LostItemByUserScreen';
import EditUserItemScreen from './src/screens/EditUserItemScreen';

const logoImage = require('./src/assets/logo.png');

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="LostItem" component={LostItemScreen} />
        <Stack.Screen name="RegisterItem" component={RegisterItemScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="LostItemByUserScreen" component={LostItemByUserScreen} />
        <Stack.Screen name="EditUserItemScreen" component={EditUserItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ navigation }: HomeScreenProps) {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('SignUp');
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
      <FooterText text="By signing in, you agree to our Terms and Conditions. Learn how we use your data in our Privacy Policy" />
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
    width: 225,
    height: 42,
    marginBottom: 50,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#50924E',
    width: 250,
    height: 50,
    borderWidth:0,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight:'bold',
  },
  signupButton: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    width: 250,
    height: 50,
    borderWidth: 0.3,
    borderColor: '#50924E',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
  },
  signupButtonText: {
    color: '#50924E',
    fontSize: 16,
    fontWeight:'bold',
  },
});