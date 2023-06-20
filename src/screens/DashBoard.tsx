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
import { FlatList, TouchableOpacity } from "react-native";
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
];

const contact = "88993847841"
const status = "Perdido"

type DashboardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

export default function DashboardScreen({ navigation }: DashboardScreenProps) {
    const keyExtractor = (item: any) => item.id.toString();
  
    const handleItemPress = (item: any, status: string, contact: string) => {
      navigation.navigate("LostItem", {
        title: item.title,
        status: status,
        description: item.content,
        contact: contact,
        imagePath: item.img,
      });
    };
  
    const renderItem = ({ item }: { item: any }) => (
      <TouchableOpacity onPress={() => handleItemPress(item, status, contact)}>
        <Item key={item.id.toString()} title={item.title} content={item.content} img={item.img} date={item.date} />
      </TouchableOpacity>
    );
  
    return (
      <BaseScreen>
        <View style={styles.container}>
          <AppTopBar navigation={navigation} />
          <View style={{ height: 0 }}></View>
          <SearchBar />
        </View>
        <FlatList keyExtractor={keyExtractor} data={mockedData} renderItem={renderItem} />
      </BaseScreen>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        top: '5%',
        flexDirection: 'column'
    }
});
