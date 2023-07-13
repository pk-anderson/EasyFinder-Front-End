import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { AuthContext } from '../../AuthContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import BaseScreen from './BaseScreen';
import Button from '../components/Button';
import RNPickerSelect from 'react-native-picker-select';

import ImageUploadField from '../components/UploadImage';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { editObject } from '../api/lostObject/EditObject';
import { listMyLostObjects } from '../api/lostObject/ListMyLostObjects';

type EditUserItemScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'EditUserItemScreen'>;
    route:any
};

const EditUserItemScreen: React.FC = (route, navigation) => {
  const itemData = route?.route?.params?.item;
  const { token, userEmail} = useContext(AuthContext);
  const [markerCoords, setMarkerCoords] = useState<LatLng | undefined>(undefined);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isLosted: '',
    location: '',
    objectImage: ''
  });

  useEffect(() => {
    setFormData({
      name: itemData.name || '',
      description: itemData.description || '',
      isLosted: itemData.isLosted || '',
      location: itemData.location || '',
      objectImage: itemData.objectImage || ''
    });
  }, [itemData]);

  const onChange = (event: any, date?: Date | undefined) => {
    if (date) {
      const currentDate = date;
      setShow(false);
      setDate(currentDate);
    }
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    setMarkerCoords(coordinate);
    const markerCoordinate = String(coordinate);
    setFormData({ ...formData, location: markerCoordinate });
  };

  const handleEditPress = async () => {
    const dataToSend = { ...formData };

    if (token === null) {
      return Alert.alert('Erro na autenticação');
    } else {
      let isUpdated = await editObject(
        itemData.id,
        itemData.owner,
        dataToSend.name,
        dataToSend.description,
        dataToSend.isLosted,
        dataToSend.location,
        dataToSend.objectImage,
        token
      );
      if (isUpdated == null) {
        return Alert.alert("Falha ao Editar");
      } else {
        Alert.alert('Informações atualizadas com sucesso');
        let itens = await listMyLostObjects(token!, itemData.owner)
        // navigation.navigate('LostItemByUserScreen', itens);
      }
    }
  };

  const handleImageSelect = (image: string) => {
    setFormData({ ...formData, objectImage: image });
  };  

  return (
    <BaseScreen
      children={[
        <View style={styles.container} key={"topContent"}>
          <Text style={styles.topText}>
            <Text>Editar Item</Text>
          </Text>
        </View>,
       <View key={"BodyContent"} style={styles.body}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.title}>Seus Dados</Text>
            <Text style={styles.name}>Novo Nome</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              placeholder={itemData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <Text style={styles.text}>Nova Descrição</Text>
            <TextInput
              style={styles.input}
              value={formData.description}
              placeholder={itemData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              multiline
            />
            <RNPickerSelect
              onValueChange={(value) =>
                setFormData({ ...formData, isLosted: value === null ? '' : value })
              }
              placeholder={{ label: 'Altere o Status do Item', value: 'Perdido' }}
              items={[
                { label: 'Perdido', value: 'true' },
                { label: 'Encontrado', value: 'false' },
              ]}
            />
            <TextInput
              style={styles.hidden}
              value={formData.objectImage}
              onChangeText={(text) => setFormData({ ...formData, objectImage: text })}
            />
            <TextInput
              style={styles.hidden}
              value={formData.objectImage}
              onChangeText={(text) => setFormData({ ...formData, objectImage: text })}
            />
            <Text style={styles.text}>Data em que o encontrou</Text>
            <TouchableOpacity
            style={{
              alignSelf:'center',
              marginTop:'3%',
              width:'100%',
              height:'5%',
              borderRadius:10,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#229E82',
            }}
            onPress={showDatepicker}>
              <Text
              style={{
                top:'3%',
                color:'white',
                fontSize:18,
                alignItems:'center',
                justifyContent:'center'
              }}
              >Informar Data</Text>
            </TouchableOpacity>

            <Text>Selecionado: {date.toLocaleDateString('pt-br')}</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                is24Hour={false}
                onChange={onChange}
                locale='pt-BR'
              />
            )}
            <Text style={styles.text}>{'\n'}Local em que o viu pela primeira vez{'\n'}</Text>
            <View style={{ height: 200 }}>
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
            </View>
            <View>
              <ImageUploadField onSelectImage={handleImageSelect}/>
            </View>
            <TouchableOpacity 
            style={{
              alignSelf:'center',
              marginTop:'3%',
              width:'100%',
              height:'5%',
              borderRadius:10,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#229E82',
            }}
            onPress={handleEditPress}>
              <Text
              style={{

                top:'1%',
                color:'white',
                fontSize:18,
            
                alignItems:'center',
                justifyContent:'center'
              }}
              >Salvar</Text>
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
    position: 'absolute',
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
    paddingBottom: 100,
    height:950
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
  },
  pickerSelectStyles: {
    borderWidth: 1.5,
    borderColor: '#6F6F6F',
    borderRadius: 4,
    padding: 5,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    color: 'black',
  }
});

export default EditUserItemScreen;
