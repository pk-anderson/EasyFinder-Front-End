import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View } from "react-native";
import BaseScreen from "./BaseScreen";
import ItemTopBar from "../components/ItemPage/index";
import React from "react";



const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

type LostItemScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'LostItem'>;
  };



export default function DashboardScreen({ navigation }: LostItemScreenProps){
    const handleBack = () => {
        navigation.navigate('Home');
    };
    return (
        <>
        <BaseScreen children={[
          <View style={style.container} key={"topContent"}>
            <ItemTopBar />
            
            
          </View>,
          
          
       ]
       }/>
       </>
    )
}
const style = StyleSheet.create({
    container:{
        display:'flex',
        top:'5%',
        flexDirection:'column'
    }
})