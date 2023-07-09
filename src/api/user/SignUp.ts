import { Alert } from "react-native";

export async function userCreate(
    name:string, 
    password:string, 
    email: string,
    phoneNumber: string,
    state: string,
    street: string,
    homeNumber: string) {
    try {
        let request = await fetch("https://easy-finder.onrender.com/user", {
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        state: state,
        street: street,
        homeNumber:homeNumber
      }),
    })
    let result = request.json()
    return result 
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
    }
   
}