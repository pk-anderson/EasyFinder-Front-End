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
import Button from '../components/Button';
import style from '../components/Button/style';

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

  // const handleEditProfile = () => {
  //   navigation.navigate('EditProfile')
  // };

  // const handleLogout = () => {
  //   navigation.navigate('Home')
  // };

  // const handleDeleteAccount = () => {
  //   console.log("deletar conta")
  // };

  // return (
  //     <BaseScreen children={[
  //       <View style={styles.container} key={"topContent"}>
  //         <AppTopBar navigation={navigation} />
      
  //       </View>,
  //       <View key={"BodyContent"} style={styles.container}>
  //         <Image source={avatarimg} style={styles.profilePicture} />
  //         <View style={styles.label}>
  //           <Text style={styles.text}>{'\n'}Nome{'\n'}</Text>

  //           <View style={styles.img}>
  //             <Image source={require('../assets/mobile.png')} />
  //             <Text style={styles.text}> +55 99 9 9999-9999</Text>
  //           </View>

  //           <View style={styles.img}>
  //             <Image source={require('../assets/sms-notification.png')} />
  //             <Text style={styles.text}> email@email.com</Text>
  //           </View>
  //         </View>
  //         <View style={{ height: 0 }}>
  //         <Button text={'Editar Perfil'} backgroundColor='#50924E' textColor='#FFFFFF' borderColor='#FFFFFF' style={styles.button} onPress={handleEditProfile}
  //         />
  //         <Button text={'Logout'} backgroundColor='#50924E' textColor='#FFFFFF' borderColor='#FFFFFF' style={styles.button} onPress={handleLogout}
  //         />
  //         <Button text={'Delete account'} backgroundColor='#FFFFFF'  textColor='#DF1818' borderColor='#FFFFFF' style={styles.button} onPress={handleDeleteAccount}
  //         />
  //         </View>
  //       </View>
  //     ]}      />
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

