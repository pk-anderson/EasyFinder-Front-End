
import { StyleSheet } from "react-native";
import { globalColors } from "../global/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

export default function BaseScreen({children} :IProps){
    return (
          <LinearGradient style={styles.containerScreen} colors={[globalColors.primaryColor,globalColors.secondaryColor]} start={{x:0.3,y:0}}  end={{x: 1,y:0}}>{children}</LinearGradient>
    )
}
const styles = StyleSheet.create({
    containerScreen:{
        width: '100%',
        height: '100%'
    },
})