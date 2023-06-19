import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, View, Image, Text, ImageSourcePropType } from "react-native";
import BaseScreen from "./BaseScreen";
import ItemTopBar from "../components/ItemPage/index";
import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
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
  DescriptionLine,
  LocationLine,
  LocationMap,
  ContactBtn,
  ContactTxt,
} from "../components/ItemPage/components";
import { RouteProp } from "@react-navigation/native";

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
      <BaseScreen
        children={[
          <View style={styles.container} key={"topContent"}>
            <ItemTopBar />
          </View>,
          <View key={"BodyContent"}>
            {imagePath ? (
              <Image source={imagePath} style={styles.lostItemImg} />
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
                <LocationLine>
                  <LocationMap></LocationMap>
                </LocationLine>
              </StatusView>
              <StatusView>
                <StatusLine>
                  <ContactBtn>
                    <ContactTxt>
                      <FontAwesome name="whatsapp" size={20} color={"green"} />
                      Entrar em Contato
                    </ContactTxt>
                  </ContactBtn>
                </StatusLine>
              </StatusView>
            </LostItemInfoView>
          </View>,
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    top: "5%",
    flexDirection: "column",
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
    position: "absolute",
    left: 55,
    top: 2,
  },
});

export default LostItemScreen;
