import { Alert } from "react-native";

export async function userLogin(email:string, password:string) {
    try {
        let request = await fetch("https://easy-finder.onrender.com/user/login", {
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    let result = await request.json()
    let authorization = request.headers.get('authorization');
  
    return { result, authorization }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
    }
   
}