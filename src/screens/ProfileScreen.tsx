import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppTopBar from '../components/AppBarTop';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import BaseScreen from "./BaseScreen";
import SearchBar from "../components/SearchBar";
import Avatar from "../components/Avatar/avatar";
import avatarimg from '../assets/avatar.jpg'

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  return (
    <BaseScreen>
      <AppTopBar navigation={navigation} />
      <Image source={avatarimg} style={styles.profilePicture} />
      <View style={{ height: 0 }} />
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    top: '5%',
    flexDirection: 'column'
  },
  profilePicture: {
    display: 'flex',
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: 115,
    alignItems: 'center',
  }
});

export default ProfileScreen;
