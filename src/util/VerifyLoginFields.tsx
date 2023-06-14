import { Alert } from "react-native";

export function VerifyLoginFields(email:string, password:string){
    return  VerifyIfLoginFieldsWereFilled(email, password)
   
    
}



function VerifyIfLoginFieldsWereFilled(email:string, password:string){
    if((email.length <= 0) && (password.length <= 0)){
        return Alert.alert(
            "E-mail e Senha inválido",
            "Verifique se você preencheu os campos de E-mail e Senha"
        );  
    }else if(email.length <= 0) {
      return Alert.alert(
      "E-mail inválido",
      "Por favor, verifique se o campo de E-mail foi preenchido."
      );
    }else if(password.length <= 0) {
      return Alert.alert(
      "Senha inválida",
      "Por favor, verifique se o campo de Senha foi preenchido."
      );
    }else{
        return true
    }
}