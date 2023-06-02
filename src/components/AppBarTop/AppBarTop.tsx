import { Image, StyleSheet, Text, View } from "react-native";
import { deviceDimensions } from "../../global/dimesion";
import menuImg from '../../assets/menu-aberto.png'


export default function AppTopBar(){
return(
    <View style={styles.containerTop}>
    <Image source={menuImg} style={styles.menu}/>
    <Text style={styles.logo}>LOGO</Text>
</View>
)
}
const styles = StyleSheet.create({
    containerTop:{
       display: 'flex',
       flexDirection: 'row',
       top: '5%',
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