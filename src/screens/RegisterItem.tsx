import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import BaseScreen from "./BaseScreen";
import ItemTopBar from '../components/ItemPage';
import ImageUploadField from '../components/UploadImage';
import MapView, {Marker, LatLng} from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';



interface Props {
  
}

const RegisterItemScreen: React.FC<Props> = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productLocalization, setProductLocalization] = useState('');
  const [markerCoords, setMarkerCoords] = useState<LatLng | undefined>(undefined);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const BRDay = date.getDay.toString()
  const BRMonth = (date.getMonth() +1).toString()
  const BRYear = date.getFullYear.toString()
  const BRFullDate = (BRDay + BRMonth + BRYear)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate)
    console.log(date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };



  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    setMarkerCoords(coordinate);
  };

  

  return (
    <BaseScreen
      children={[
        <View style={styles.container} key={"topContent"}>
            <Text style={styles.topText}>Cadastrar Item <Button style={styles.saveBtn} text='Salvar'></Button></Text>
          </View>,
        <View key={"BodyContent"} style={styles.body}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.tittle}>Dados do Produto{'\n'}</Text>
            <Text style={styles.text}>PRODUTO{'\n'}</Text>
            <TextInput
              style={styles.input}
              value={productName}
              onChangeText={text => setProductName(text)}
            />
            <Text style={styles.text}>{'\n'}DESCRIÇÃO{'\n'}</Text>
            <TextInput
              style={styles.input}
              value={productDescription}
              onChangeText={text => setProductDescription(text)}
              multiline
            />
            <Text style={styles.text}>DATA QUE O ENCONTROU</Text>
            <Button onPress={showDatepicker} text="Informar Data" />
            {/* date.toLocaleDateString('pt-br') */}
            <Text>selecionado: {date.toLocaleDateString('pt-br')}</Text>
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
            <View style={{height: 200}}>
              <MapView
                onPress={handleMapPress}
                style={{ flex: 1}}
                initialRegion={{
                  latitude: -6.8883, //Dados Geograficos da Cidade de Cajazeiras
                  longitude: -38.5591,
                  latitudeDelta: 0.08, // Serve como um Zoom
                  longitudeDelta: 0.08, // ...    ...    ...
                }}>
                {markerCoords && (
                  <Marker coordinate={markerCoords} />
                )}
              </MapView>
            
            </View>
            

            <ImageUploadField />
          </ScrollView>
          
          
        </View>,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: -20
    
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
  scrollView:
  {
    paddingBottom: 100
  }
});

export default RegisterItemScreen;
