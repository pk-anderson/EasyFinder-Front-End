import { Alert } from 'react-native';

export async function deleteItem(
  id: string,
  token: string
) {
  try {
    const request = await fetch("https://easy-finder.onrender.com/lostObject", {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        id: id
      }),
    });
    
    const result = await request.json();
    return result;
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
  }
}