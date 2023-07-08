import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import AppTopBar from '../components/AppBarTop';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import BaseScreen from "./BaseScreen";
import SearchBar from "../components/SearchBar";
import Avatar from "../components/Avatar/avatar";
import avatarimg from '../assets/avatar.jpg'
import Item from '../components/User';
import User from '../components/User';
import { detailUserProfile } from '../api/user/UserProfileDetails';
import { AuthContext } from '../../AuthContext';
import { useRoute } from '@react-navigation/native';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const route = useRoute()
  const params = route.params
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState('');
  const keyExtractor = (item: any) => item.id.toString();

  useEffect(() => {
    const fetchData = async () => {
      const data = await detailUserProfile(token);
      setUserData(data);
      console.log(data);
    }
  
    fetchData()
      .catch(console.error);;
  }, [])

  const renderItem = () => (
    <TouchableOpacity >
      <User key={1} name={"User Name"} data={userData[0]}/>
    </TouchableOpacity>
  );

  return (
    <BaseScreen>
      <Image source={avatarimg} style={styles.profilePicture} />
      <View style={{ height: 0 }} />
      <FlatList keyExtractor={keyExtractor} data={userData} renderItem={renderItem} />
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
