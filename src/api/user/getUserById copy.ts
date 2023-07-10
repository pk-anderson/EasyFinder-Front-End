import { Alert } from "react-native";

export async function getUserById(id: string, token: string) {
    try {
      const url = `https://easy-finder.onrender.com/user/${encodeURIComponent(id)}`;
      
      const response = await fetch(url, {
        headers: {
          Authorization: `${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
    }
  }
  