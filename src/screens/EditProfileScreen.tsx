import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { AuthContext } from '../../AuthContext';
import BaseScreen from './BaseScreen';
import Button from '../components/Button';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { editUser } from '../api/user/EditUser';
import ImageUploadField from '../components/UploadImage';

type EditProfileScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;
    route:any
};

const EditProfileScreen: React.FC = (route, navigation) => {
  const userData = route?.route?.params;
  const { token, userEmail } = useContext(AuthContext);
  const { setUserEmail } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    street: '',
    userImage: '',
    homeNumber: '',
    phoneNumber: '',
    password: ''
  });

  useEffect(() => {
    setFormData({
      name: userData.name,
      email: userData.email,
      state: userData.state,
      street: userData.street,
      userImage: userData.userImage,
      homeNumber: userData.homeNumber,
      phoneNumber: userData.phoneNumber,
      password: userData.password
    });
  }, []);

  const handleEditPress = async () => {
    const dataToSend = { ...formData };
    console.log(dataToSend)
    if (token === null || userEmail === null) {
      return Alert.alert('Erro na autenticação ou email inexistente');
    } else {
      let isUpdated = await editUser(
        dataToSend.name,
        dataToSend.email,
        dataToSend.state,
        dataToSend.street,
        dataToSend.userImage,
        dataToSend.homeNumber,
        dataToSend.phoneNumber,
        dataToSend.password,
        token,
        userEmail
      );
      if (isUpdated.has_error) {
        return Alert.alert("Falha ao Editar", isUpdated.data);
      } else {
        Alert.alert('Informações atualizadas com sucesso', isUpdated.data);
        setUserEmail(dataToSend.email);
        //TODO Navigation sem funcionar
        // navigation.navigate('ProfileScreen');
      }
    }
  };

  const handleImageSelect = (image: string) => {
    setFormData({ ...formData, userImage: image });
  }; 

  return (
    <BaseScreen
      children={[
        <View style={styles.container} key={"topContent"}>
          <Text style={styles.topText}>
          Editar Dados
          </Text>
        </View>,
       <View key={"BodyContent"} style={styles.body}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.title}>Seus Dados</Text>
            <Text style={styles.name}>Novo Nome</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              placeholder={userData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <Text style={styles.text}>Novo Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              placeholder={userData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              multiline
            />
            <Text style={styles.text}>Novo Estado</Text>
            <TextInput
              style={styles.input}
              value={formData.state}
              placeholder={userData.state}
              onChangeText={(text) => setFormData({ ...formData, state: text })}
              multiline
            />
            <Text style={styles.text}>Nova Rua</Text>
            <TextInput
              style={styles.input}
              value={formData.street}
              placeholder={userData.street}
              onChangeText={(text) => setFormData({ ...formData, street: text })}
              multiline
            />
            <Text style={styles.text}>Novo Número da Casa</Text>
            <TextInput
              style={styles.input}
              value={formData.homeNumber}
              placeholder={userData.homeNumber}
              onChangeText={(text) => setFormData({ ...formData, homeNumber: text })}
              multiline
            />
            <Text style={styles.text}>Novo Número Pessoal</Text>
            <TextInput
              style={styles.input}
              value={formData.phoneNumber}
              placeholder={userData.phoneNumber}
              onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
              multiline
            />
            <Text style={styles.text}>Nova Senha</Text>
            <TextInput
              style={styles.input}
              value={formData.password}
              placeholder={userData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
              multiline
            />       
            <View>
              <Text style={styles.text}>Adicione Uma Imagem</Text>
              <ImageUploadField onSelectImage={handleImageSelect}/>
            </View>
            {/* <Text style={styles.text}>{'\n'}LOCAL QUE O VIU PELA ULTIMA VEZ{'\n'}</Text> */}
            {/* <View style={{ height: 200 }}>
              <MapView
                onPress={handleMapPress}
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: -6.8883,
                  longitude: -38.5591,
                  latitudeDelta: 0.08,
                  longitudeDelta: 0.08,
                }}
              >
                {markerCoords && <Marker coordinate={markerCoords} />}
              </MapView>
            </View> */}
            {/* <View>
              <ImageUploadField />
            </View> */}
              <TouchableOpacity onPress={handleEditPress} style={{
                      alignSelf:'center',
                      marginTop:'3%',
                      width:'100%',
                      height:'5%',
                      borderRadius:10,
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor:'#229E82',
              }}>
                <Text style={{
                     top:'3%',
                     color:'white',
                     fontSize:15,
                 
                     alignItems:'center',
                     justifyContent:'center'
                }}>Editar Usuário</Text>
              </TouchableOpacity>
          </ScrollView>
        </View>,
        ]}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveBtn: {
  
    top: 2,
    color: "#1e1e1e"
  },
  topText: {
    position: 'absolute',
    top: 0,
    left: 100,
    color: 'white',
    fontSize: 30
  },
  scrollView: {
    height:950,
    paddingBottom: 100,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: '#6F6F6F',
  },
  hidden: {
    display: 'none',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#6F6F6F',
    borderRadius: 4,
    padding: 5,
    marginBottom: 16,
  }
});

export default EditProfileScreen;
