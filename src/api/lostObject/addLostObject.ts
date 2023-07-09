import { Alert } from 'react-native';
import { getUniqueUser } from '../user/getUserByEmail'

export async function createLostObject(
  name: string,
  isLosted: boolean,
  description: string,
  location: string,
  ownerEmail: string,
  objectImage: string,
  token: string
) {
  try {
    // Buscar usuário pelo email
    const user = await getUniqueUser(ownerEmail, token);
    const owner = user.data.id; // Utiliza o ID do usuário como owner
    const request = await fetch("https://easy-finder.onrender.com/lostObject", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        name: name,
        isLosted: isLosted,
        description: description,
        location: location,
        owner: owner,
        objectImage: objectImage
      }),
    });

    const result = await request.json();
    return result;
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
  }
}
