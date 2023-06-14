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
import React from "react";
import Button from "../components/Button";

const mockedData = [
    {
        id: 1,
        title :'Garrafa Termica',
        content :'Achei uma Garrafinha no Lab de ...',
        img: copoImg,
        date: 'Há 5h'
    },
    {
        id: 2,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id: 3,
        title :'Iphone 8 Plus',
        content :'Iphone encontrado perto da ...',
        img: iphoneImg,
        date: 'Sexta-Feira'
    },
    {
        id: 4,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id: 5,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id: 6,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },

    {
        id: 8,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id:9,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id:10,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id:11,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
    {
        id:12,
        title :'Estojo escolar',
        content :'Encontrei esse estojo perto do ...',
        img: estojoImg,
        date: 'Segunda-Feira'
    },
 
]

type DashboardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
  };


export default function DashboardScreen({ navigation }: DashboardScreenProps){
    const keyExtractor = (item :any) => {
       console.log(item.id.toString())
       return item.id.toString()
    };

    const handleItemPress = () => {
        console.log('LostItem button pressed!');
        navigation.navigate('LostItem')
      };
    
    return (
        <BaseScreen children={[
          <View style={style.container} key={"topContent"}>
            <AppTopBar />
            <Button onPress={handleItemPress} text="Ver Item"></Button>
            <View style={{height:0}}></View>
            
            <SearchBar />
          </View>,
          <FlatList key={"BodyContent"} keyExtractor={keyExtractor}  data={mockedData} renderItem={({item}) => <Item key={item.id.toString()} title={item.title} content={item.content} img={item.img} date={item.date} />}
          />
          
          
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