import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View } from "react-native";
import BaseScreen from "./BaseScreen";
import AppTopBar from "../components/AppBarTop";
import SearchBar from "../components/SearchBar";
import { FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from '../../AuthContext';
import MyItem from "../components/MyItem";
import { getUniqueUser } from "../api/user/getUserByEmail";
import { deleteItem } from "../api/lostObject/DeleteItem";
import { listMyLostObjects } from "../api/lostObject/ListMyLostObjects";

type LostItemByUserScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LostItemByUserScreen'>;
    route:any
};

export default function LostItemByUserScreen({ route, navigation }: LostItemByUserScreenProps) {
    const keyExtractor = (item: any) => item.id.toString();
    const { token, userEmail } = useContext(AuthContext);

    const handleItemPress = async (item: any) => {
      let user = await getUniqueUser(userEmail!, token!)
      
      navigation.navigate("LostItem", {
        title: item.name,
        status: (item.isLosted == "true")?"Perdido":"Encontrado",
        description: item.description,
        contact: user?.data.phoneNumber,
        imagePath: `https://easy-finder.onrender.com/${item.objectImage}`,
      });
    };

    const handleDeleteItem = async (id: string) => {
      await deleteItem(id!, token!)
      let user = await getUniqueUser(userEmail!, token!)
      let itens = await listMyLostObjects(token!, user?.data.id)
      navigation.navigate('LostItemByUserScreen', itens)
    };

    const handleEditItem = async (id: string) => {
      let user = await getUniqueUser(userEmail!, token!)
      let itens = await listMyLostObjects(token!, user?.data.id)
      navigation.navigate('LostItemByUserScreen', itens)
    };
  
    const renderItem = ({ item }: { item: any }) => (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <MyItem id={item.id} name={item.name} description={item.description} objectImage={item.objectImage} isLosted={item.isLosted} onDelete={() => handleDeleteItem(item.id)} onEdit={() => handleEditItem(item.id)}  />
      </TouchableOpacity>
    );
  
    return (
      <BaseScreen>
        <View style={styles.container}>
          <AppTopBar navigation={navigation} />
          <View style={{ height: 0 }}></View>
          <SearchBar />
        </View>
        <FlatList keyExtractor={keyExtractor} data={route.params} renderItem={renderItem} />
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
