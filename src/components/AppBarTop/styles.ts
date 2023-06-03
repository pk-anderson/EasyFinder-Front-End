import { StyleSheet } from "react-native";
import { deviceDimensions } from "../../global/dimesion";

export const styles = StyleSheet.create({
    containerTop:{
       display: 'flex',
       flexDirection: 'row',
       
       justifyContent: 'center',      
    },
    logo: {
      color: 'white',
      fontSize: 30,

    },
    menu:{
        right: deviceDimensions().width * 0.3,
        width:24,
        top:5,
        height:36
    }
})