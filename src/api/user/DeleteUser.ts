import { Alert } from 'react-native';
import { getUniqueUser } from '../user/getUserByEmail'

export async function deleteUser(
  token: string,
  userEmail: string
) {
  try {
    const user = await getUniqueUser(userEmail, token);
    const owner = user.data.id;
    const request = await fetch("https://easy-finder.onrender.com/user", {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        id: owner
      }),
    });
    
    const result = await request.json();
    return result;
  } catch (error) {
    console.log(error)
    Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
  }
}