import { Alert } from 'react-native';

export async function editObject(
  id: string,
  owner: string,
  name: string,
  description: string,
  isLosted: string,
  location: string,
  objectImage: string,
  token: string
) {
  try {
    const request = await fetch(`https://easy-finder.onrender.com/lostObject`, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        id: id,
        name: name,
        description: description,
        owner: owner,
        isLosted: isLosted,
        location: location,
        objectImage: objectImage
      }),
    });
    const result = await request.json();
    return result;
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
  }
}