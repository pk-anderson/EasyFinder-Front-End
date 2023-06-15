import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View, Image } from "react-native";
import BaseScreen from "./BaseScreen";
import ItemTopBar from "../components/ItemPage/index";
import React from "react";
import ImageSlot from '../assets/ImageSlot.jpg'
import ItemImg from '../assets/Garrafinha.jpeg'

import {LostItemInfoView, LstItmHeaderInfo, LstItmHeader, HeaderSub, HeaderTitle} from '../components/ItemPage/components'
import {StatusView, StatusLine, StatusLabel, StatusValue} from '../components/ItemPage/components'



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
          <View style={styles.container} key={"topContent"}>
            <ItemTopBar />
            
            
          </View>,
          <View key={"BodyContent"}>
            <Image source={ItemImg} style={styles.lostItemImg}/>
            <LostItemInfoView>
              <LstItmHeader>
                <LstItmHeaderInfo>
                  <HeaderTitle>Garrafa Termica</HeaderTitle>
                  <HeaderSub>🚩Cajazeiras - PB</HeaderSub>
                </LstItmHeaderInfo>
              </LstItmHeader>
              <StatusView>
                <StatusLine>
                    <StatusLabel>Status</StatusLabel>
                    <StatusValue>⛔ Perdido</StatusValue>
                </StatusLine>
            </StatusView>
            </LostItemInfoView>
           
          </View>,
          
          
          
       ]
       }/>
       
       </>
    )
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    top:'5%',
    flexDirection:'column',
    paddingTop: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  lostItemImg: {
    width: 250,
    height: 250,
    position: 'absolute',
    left: 55,
    top:2
  }
});