import { StyleSheet } from "react-native";
import { deviceDimensions } from "../../global/dimesion";


export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        width: deviceDimensions().width ,
        height: deviceDimensions().height * 0.1,
   
        marginTop:20,
        borderWidth:1,
        borderBottomColor:'#DAD8D4',
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
    },
    textContent:{
        top:5,
        display:'flex',
        marginLeft:25,
        width:deviceDimensions().width * 0.5,
        flexDirection: 'column',
    },
    dateContainer:{
        display: 'flex',
        top:5,
        left:7,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:23,
        marginBottom:'15%',
        
    },
    img:{
        left:10,
        borderWidth:1,
        width: deviceDimensions().width *0.15,
        height: deviceDimensions().height * 0.075,
    
    }
})