import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View, Image, Text, ImageSourcePropType, ScrollView, Touchable, TouchableOpacityComponent, TouchableOpacity } from "react-native";
import BaseScreen from "./BaseScreen";
import ItemTopBar from "../components/ItemPage/index";
import React from "react";
import MapView from 'react-native-maps';
import { Entypo, AntDesign} from "@expo/vector-icons";
import {
  LostItemInfoView,
  LstItmHeaderInfo,
  LstItmHeader,
  HeaderSub,
  HeaderTitle,
} from "../components/ItemPage/components";
import {
  StatusView,
  StatusLine,
  StatusLabel,
  StatusValue,
  DescriptionText,
} from "../components/ItemPage/components";
import {
  DescriptionLine
} from "../components/ItemPage/components";
import { RouteProp } from "@react-navigation/native";
import Button from "../components/Button";

type LostItemScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LostItem'>;
  route: RouteProp<RootStackParamList, 'LostItem'>;
};

const LostItemScreen = ({ navigation, route }: LostItemScreenProps) => {
  const { title, status, description, contact, imagePath } = route.params;

  const handleBack = () => {
    navigation.navigate('Home');
  };

  


  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
      <BaseScreen
        children={[
          <View style={styles.container} key={"topContent"}>
            <Text style={styles.topText}>{title}</Text>
          </View>,
          <View key={"BodyContent"} style={styles.body}>
            {imagePath ? (
              <Image source={{uri:imagePath}} style={styles.lostItemImg} />
            ) : null}
            <LostItemInfoView>
              <LstItmHeader>
                <LstItmHeaderInfo>
                  <HeaderTitle>{title}</HeaderTitle>
                  <HeaderSub>
                    <Entypo name="location-pin" size={22} color={"red"} />
                    Cajazeiras - PB
                  </HeaderSub>
                </LstItmHeaderInfo>
              </LstItmHeader>
              <StatusView>
                <StatusLine>
                  <StatusLabel>Status</StatusLabel>
                  <StatusValue>
                    <AntDesign name="plussquare" size={20} color={"red"} />{" "}
                    {status}
                  </StatusValue>
                </StatusLine>
              </StatusView>
              <StatusView>
                <StatusLine>
                  <StatusLabel>Contato</StatusLabel>
      
                  <StatusValue>{contact}</StatusValue>
              
                </StatusLine>
              </StatusView>
              <StatusView>
                <StatusLine>
                  <StatusLabel>Descrição</StatusLabel>
                </StatusLine>
                <DescriptionLine>
                  <DescriptionText>{description}</DescriptionText>
                </DescriptionLine>
              </StatusView>
              <StatusView>
                <StatusLine>
                  <StatusLabel>Localização</StatusLabel>
                </StatusLine>
                
              </StatusView>
              
            </LostItemInfoView>
            <View style={styles.map}>
              <MapView 
                style={{ flex: 1}}
                initialRegion={{
                  latitude: -6.8883, 
                  longitude: -38.5591,
                  latitudeDelta: 0.0095,
                  longitudeDelta: 0.009
                }}/>
            </View>
            
          </View>,
        ]}
      />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: -20
  },
  body: {
    flex: 1,
    padding: 16,
    
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
    width: 220,
    height: 220,
    position: "absolute",
    left: 65,
    top: 2,
  },
  topText: {
    position: 'absolute',
    top: 0,
    left: 85,
    color: 'white',
    fontSize: 30
  },
  map:{
    marginTop: 480,
    height: 150,
  }
});

export default LostItemScreen;
