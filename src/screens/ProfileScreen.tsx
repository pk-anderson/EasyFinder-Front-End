import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppTopBar from '../components/AppBarTop';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import BaseScreen from "./BaseScreen";
import SearchBar from "../components/SearchBar";
import Avatar from "../components/Avatar/avatar";
import avatarimg from '../assets/avatar.jpg';
import Button from '../components/Button';
import style from '../components/Button/style';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const handleEditProfile = () => {
    navigation.navigate('EditProfile')
  };

  const handleLogout = () => {
    navigation.navigate('Home')
  };

  const handleDeleteAccount = () => {
    console.log("deletar conta")
  };

  return (
      <BaseScreen children={[
        <View style={styles.container} key={"topContent"}>
          <AppTopBar navigation={navigation} />
      
        </View>,
        <View key={"BodyContent"} style={styles.container}>
          <Image source={avatarimg} style={styles.profilePicture} />
          <View style={styles.label}>
            <Text style={styles.text}>{'\n'}Nome{'\n'}</Text>

            <View style={styles.img}>
              <Image source={require('../assets/mobile.png')} />
              <Text style={styles.text}> +55 99 9 9999-9999</Text>
            </View>

            <View style={styles.img}>
              <Image source={require('../assets/sms-notification.png')} />
              <Text style={styles.text}> email@email.com</Text>
            </View>
          </View>
          <View style={{ height: 0 }}>
          <Button text={'Editar Perfil'} backgroundColor='#50924E' textColor='#FFFFFF' borderColor='#FFFFFF' style={styles.button} onPress={handleEditProfile}
          />
          <Button text={'Logout'} backgroundColor='#50924E' textColor='#FFFFFF' borderColor='#FFFFFF' style={styles.button} onPress={handleLogout}
          />
          <Button text={'Delete account'} backgroundColor='#FFFFFF'  textColor='#DF1818' borderColor='#FFFFFF' style={styles.button} onPress={handleDeleteAccount}
          />
          </View>
        </View>
      ]}      />
      
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    top: '5%',
    flexDirection: 'column',
  },
  profilePicture: {
    display: 'flex',
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: 115,
    alignItems: 'center',
  },
  label: {
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flexDirection: 'row',
  },
  text: {
    font: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    top: 80,
    padding: 12,
    marginTop:10,
    marginLeft: 80,
    marginRight: 80,
    height: 48
  }
});

export default ProfileScreen;

