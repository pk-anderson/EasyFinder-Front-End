import { Alert } from 'react-native';
import { getUniqueUser } from '../user/getUserByEmail'

export async function editUser(
  name: string,
  email: string,
  state: string,
  street: string,
  perfilImage: string,
  homeNumber: string,
  phoneNumber: string,
  password: string,
  token: string,
  userEmail: string
) {
  try {
    const user = await getUniqueUser(userEmail, token);
    const owner = user.data.id;
    const request = await fetch("https://easy-finder.onrender.com/user", {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({
        name: name,
        email: email,
        state: state,
        street: street,
        perfilImage: perfilImage,
        homeNumber: homeNumber,
        phoneNumber: phoneNumber,
        password: password
      }),
    });

    const result = await request.json();
    return result;
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
  }
}