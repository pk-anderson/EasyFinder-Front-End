import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import BaseScreen from "./BaseScreen";
import ItemTopBar from '../components/ItemPage';

interface Props {
  // Defina as propriedades necessárias para a página aqui
}

const RegisterItemScreen: React.FC<Props> = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  
  return (
    <BaseScreen
      children={[
        <View style={styles.container} key={"topContent"}>
          <ItemTopBar />
        </View>,
        <View key={"BodyContent"} style={styles.container}>
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
          <Text style={styles.text}>{'\n'}LOCAL QUE O VIU PELA ULTIMA VEZ{'\n'}</Text>
        </View>,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
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
    padding: 8,
    marginBottom: 16,
  },
});

export default RegisterItemScreen;
