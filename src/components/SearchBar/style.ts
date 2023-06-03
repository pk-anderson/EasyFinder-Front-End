import { StyleSheet } from "react-native";
import { deviceDimensions } from "../../global/dimesion";

export const style = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignContent:'center',
        borderRadius: 12,
        paddingRight: 20,
        justifyContent: 'center',
        width: deviceDimensions().width * 0.9,
        height: deviceDimensions().height * 0.06,
        top: '2%',
        left: deviceDimensions().width * 0.05
    },
    textInput:{
     padding:10,
    },
    containerPlaceholder:{
        left: 13,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        width: deviceDimensions().width * 0.9,
        height: deviceDimensions().height * 0.03,
    
    },
    lupaImg:{
        width: 20,
        height: 20,
    }
})