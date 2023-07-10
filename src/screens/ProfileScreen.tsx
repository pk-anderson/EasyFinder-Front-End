import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
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
import { ContactBtn, ContactTxt, DescriptionLine, DescriptionText, HeaderSub, HeaderTitle, LostItemInfoView, LstItmHeader, LstItmHeaderInfo, StatusLabel, StatusLine, StatusValue, StatusView } from '../components/ItemPage/components';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { deleteUser } from '../api/user/DeleteUser';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const { token, userEmail } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', userData)
  };

  const handleDeleteAccount = async () => {
    const isDeleted = await deleteUser(
      token!,
      userEmail!
    );
    if (isDeleted.has_error) {
      return Alert.alert("Falha no Cadastro", isDeleted.data);
    } else {
      Alert.alert('Sucesso', isDeleted.data);
      navigation.navigate("Login");
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await detailUserProfile(token!, userEmail!);
      setUserData(data);
    }
  
    fetchData()
      .catch();
  }, [])

  return (
    <>
    <BaseScreen
      children={[
        <View key={"BodyContent"} style={styles.container}>
          <AppTopBar navigation={navigation} />
          <Image source={avatarimg} style={styles.profilePicture} />
          <View style={styles.label}>
            <Text style={styles.text}>{userData?.name}</Text>
            <View style={styles.img}>
              <Image source={require('../assets/mobile.png')} />
              <Text style={styles.text}>{userData?.phoneNumber}</Text>
            </View>
            <View style={styles.img}>
              <Image source={require('../assets/sms-notification.png')} />
              <Text style={styles.text}>{userData?.email}</Text>
            </View>
          </View>
          <View style={{ height: 0 }}>
          </View>
        </View>,
        <View style={styles.container} key={"topContent"}>
        <Button text={'Editar Perfil'} backgroundColor='#50924E' textColor='#FFFFFF' borderColor='#FFFFFF' style={styles.button} onPress={handleEditProfile}
        />
        <Button text={'Excluir Perfil'} backgroundColor='#FFFFFF' textColor='#DF1818' borderColor='#FFFFFF' style={styles.button} onPress={handleDeleteAccount}
        />
      </View>
      ]}
    />
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    top: '5%',
    flexDirection: 'column',
  },
  userImg: {
    width: 220,
    height: 220,
    position: "absolute",
    left: 65,
    top: 2,
  },
  topText: {
    position: 'absolute',
    top: 0,
    left: 85,
    color: 'white',
    fontSize: 30
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
  textBox: {
    top: 80,
    padding: 12,
    marginTop:10,
    marginLeft: 80,
    marginRight: 80,
    height: 48
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

