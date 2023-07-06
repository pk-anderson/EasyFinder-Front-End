import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppTopBar from '../components/AppBarTop';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import BaseScreen from "./BaseScreen";
import SearchBar from "../components/SearchBar";
import Avatar from "../components/Avatar/avatar";
import avatarimg from '../assets/avatar.jpg'
import Button from '../components/Button';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  return (
      <BaseScreen children={[
        <View style={styles.container} key={"topContent"}>
          <AppTopBar navigation={navigation} />
      
        </View>,
        <View key={"BodyContent"} style={styles.container}>
          <Image source={avatarimg} style={styles.profilePicture} />
          <View style={styles.label}>
            <Text style={styles.text}>{'\n'}Nome{'\n'}</Text>

            <Text style={styles.text}>+55 99 9 9999-9999</Text>

            <Text style={styles.text}>email@email.com</Text>
          </View>
          <View style={{ height: 0 }}>
          <Button text={'Logout'} backgroundColor='#50924E' textColor='#FFFFFF' borderColor='#FFFFFF' style={styles.button} onPress={function (): void {
            throw new Error('Function not implemented.');
          } }
          />
          <Button text={'Delete account'} backgroundColor='#FFFFFF'  textColor='#DF1818' borderColor='#FFFFFF' style={styles.button} onPress={function (): void {
            throw new Error('Function not implemented.');
          } }
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    top: 150,
    padding: 12,
    borderRadius: 20,
    marginLeft: 80,
    marginRight: 80,
    height: 48
  }
});

export default ProfileScreen;

