import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View } from "react-native";
import BaseScreen from "./BaseScreen";
import AppTopBar from "../components/AppBarTop";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import copoImg from '../assets/image.png'
import estojoImg from '../assets/image(1).png'
import iphoneImg from '../assets/image(2).png'
import { FlatList } from "react-native";


const mockedData = [
    {
        title :'Garrafa Termica',
        content :'Achei uma Garrafinha no Lab de ...',
        img: copoImg,
        date: 'Há 5h'
    },
    {
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        title :'Iphone 8 Plus',
        content :'Iphone encontrado perto da ...',
        img: iphoneImg,
        date: 'Sexta-Feira'
    },
]

type DashboardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
  };


export default function DashboardScreen({ navigation }: DashboardScreenProps){
    return (
        <BaseScreen children={[
          <View style={style.container}>
            <AppTopBar />
            <View style={{height:30}}></View>
            <SearchBar />
          </View>,
          <FlatList data={mockedData} renderItem={({item}) =><Item title={item.title} content={item.content} img={item.img} date={item.date}/>}/>
        ]
        }/>
    )
}
const style = StyleSheet.create({
    container:{
        display:'flex',
        top:'5%',
        flexDirection:'column'
    }
})