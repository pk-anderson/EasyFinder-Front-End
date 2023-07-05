import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import BaseScreen from "./BaseScreen";
import ItemTopBar from '../components/ItemPage';
import ImageUploadField from '../components/UploadImage';
import MapView, { Marker, LatLng } from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';
import { AuthContext } from '../../AuthContext';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

import { createLostObject } from '../api/lostObject/addLostObject';
import { useRoute } from '@react-navigation/native';

interface Props {}

type RegisterItem = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RegisterItem'>;
};

function RegisterItemScreen({ navigation }: RegisterItem) {
  const { token } = useContext(AuthContext);
  const route = useRoute()
  const params = route.params

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [markerCoords, setMarkerCoords] = useState<LatLng | undefined>(undefined);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const BRDay = date.getDay.toString();
  const BRMonth = (date.getMonth() + 1).toString();
  const BRYear = date.getFullYear.toString();
  const BRFullDate = BRDay + BRMonth + BRYear;

  const [formData, setFormData] = useState({
    name: '',
    isLosted: true,
    description: '',
    location: '',
    owner: '',
    objectImage: '',
  });

  const handleSavePress = async () => {
    try {
      const dataToSend = { ...formData };

      if (token === null) {
        // Lógica para tratar o token nulo
      } else {
        let isCreated = await createLostObject(
          dataToSend.name,
          dataToSend.isLosted,
          dataToSend.description,
          dataToSend.location,
          dataToSend.owner,
          dataToSend.objectImage,
          token
        );
        if (isCreated.has_error) {
          return Alert.alert('Falha no Cadastro', isCreated.data);
        } else {
          console.log('Teste');
          navigation.navigate('Dashboard');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao processar o cadastro.');
    }
  };

  const onChange = (event: any, date?: Date | undefined) => {
    if (date) {
      const currentDate = date;
      setShow(false);
      setDate(currentDate);
      console.log(date);
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

  return (
    <BaseScreen
      children={[
        <View style={styles.container} key={"topContent"}>
          <Text style={styles.topText}>
            Cadastrar Item <Button onPress={handleSavePress} style={styles.saveBtn} text='Salvar' />
          </Text>
        </View>,
       <View key={"BodyContent"} style={styles.body}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.tittle}>Dados do Produto{'\n'}</Text>
            <Text style={styles.text}>PRODUTO{'\n'}</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <Text style={styles.text}>{'\n'}DESCRIÇÃO{'\n'}</Text>
            <TextInput
              style={styles.input}
              value={formData.description}
              onChangeText={(text) => setFormData({ ...formData, description: text })}
              multiline
            />
            <TextInput
              style={styles.hidden}
              value={formData.objectImage}
              onChangeText={(text) => setFormData({ ...formData, objectImage: text })}
            />
            <Text style={styles.text}>DATA QUE O ENCONTROU</Text>
            <Button onPress={showDatepicker} text="Informar Data" />
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
            <Text style={styles.text}>{'\n'}LOCAL QUE O VIU PELA ULTIMA VEZ{'\n'}</Text>
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
              <ImageUploadField />
            </View>
          </ScrollView>
        </View>,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: -20,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#6F6F6F',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#6F6F6F',
    borderRadius: 4,
    padding: 5,
    marginBottom: 16,
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
  datePicker: {
    width: 200,
    marginBottom: 20
  },
  scrollView: {
    paddingBottom: 100,
  },
  imageCamView: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hidden: {
    display: 'none',
  },
});

export default RegisterItemScreen;
