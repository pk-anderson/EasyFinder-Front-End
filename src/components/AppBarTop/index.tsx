import { Image,Text, View } from "react-native";
import menuImg from '../../assets/menu-aberto.png'
import { styles } from "./styles";

export default function AppTopBar(){
return(
    <View style={styles.containerTop}>
    <Image source={menuImg} style={styles.menu}/>
    <Text style={styles.logo}>LOGO</Text>
</View>
)
}