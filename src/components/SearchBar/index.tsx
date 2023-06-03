import { Image,Text, TextInput, View } from "react-native";
import lupaImg from '../../assets/lupa.png'
import { useState } from "react";
import { style } from './style'

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