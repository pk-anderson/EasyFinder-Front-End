import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View } from "react-native";
import BaseScreen from "./BaseScreen";
import AppTopBar from "../components/AppBarTop";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import { FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Button from "../components/Button";
import { AuthContext } from '../../AuthContext';
import { listLostObjects } from '../api/user/ListLostObjects';
import { getUniqueUser } from "../api/user/getUserByEmail";
import { getUserById } from "../api/user/getUserById copy";

type DashboardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
    route:any
};

export default function DashboardScreen({ route, navigation }: DashboardScreenProps) {
    const keyExtractor = (item: any) => item.id.toString();
    const { token } = useContext(AuthContext);
  
    const handleItemPress = async (item: any) => {
      let user = await getUserById(item.owner!, token!)

      navigation.navigate("LostItem", {
        title: item.name,
        status: (item.isLosted == "true")?"Perdido":"Encontrado",
        description: item.description,
        contact: user?.data.phoneNumber,
        imagePath: `https://easy-finder.onrender.com/${item.objectImage}`,
      });
    };
  
    const renderItem = ({ item }: { item: any }) => (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <Item id={item.id} name={item.name} description={item.description} objectImage={item.objectImage} isLosted={item.isLosted} />
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
