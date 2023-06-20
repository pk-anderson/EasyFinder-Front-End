import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  // Defina as propriedades necessárias para a página aqui
}

const RegisterItemScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste de Navegação</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RegisterItemScreen;
