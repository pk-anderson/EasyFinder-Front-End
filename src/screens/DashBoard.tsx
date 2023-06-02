import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { View } from "react-native";
import BaseScreen from "./BaseScreen";

import AppTopBar from "../components/AppBarTop/AppBarTop";


type DashboardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
  };


export default function DashboardScreen({ navigation }: DashboardScreenProps){
    return (
        <BaseScreen children={
          <View>
            <AppTopBar />
          </View>
        }/>
    )
}
