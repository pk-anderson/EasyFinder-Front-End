import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View } from "react-native";
import BaseScreen from "./BaseScreen";

import AppTopBar from "../components/AppBarTop/AppBarTop";
import SearchBar from "../components/SearchBar/SearchBar";


type DashboardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
  };


export default function DashboardScreen({ navigation }: DashboardScreenProps){
    return (
        <BaseScreen children={
          <View style={style.container}>
            <AppTopBar />
            <View style={{height:30}}></View>
            <SearchBar />
          </View>
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