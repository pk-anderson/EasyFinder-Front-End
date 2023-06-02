import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { deviceDimensions } from "../../global/dimesion";
import lupaImg from '../../assets/lupa.png'
import { useState } from "react";


export default function SearchBar() {

    const [text,setText] = useState('')

    return(
        <View style={style.container}>
        {text === '' ? <PlaceHolder /> : null}
      <TextInput style={style.textInput}
        onChangeText={(text) => setText(text)}
      />
        </View>
    )
}
function PlaceHolder(){
    return (
        <View style={style.containerPlaceholder}> 
          <Image source={lupaImg} style={style.lupaImg}/>
          <Text style={{paddingLeft:10,color:'#595F67'}}>Procure o seu item perdido...</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignContent:'center',
        borderRadius: 24,
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