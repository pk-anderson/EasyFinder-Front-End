
import { StyleSheet } from "react-native";
import { globalColors } from "../global/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { View } from "react-native";
import { deviceDimensions } from "../global/dimesion";
import React from "react";

interface IProps {
    children: ReactNode[]
}

export default function BaseScreen({children} :IProps){
    return (
          <LinearGradient style={styles.containerScreen} colors={[globalColors.mainColor,globalColors.mainColor]} start={{x:0.1,y:0}}  end={{x: 1,y:0}}>
            {children[0]}
            <View style={styles.bodyTemplate}>{children[1]}</View>
          </LinearGradient>

    )
}
const styles = StyleSheet.create({
    containerScreen:{
        width: '100%',
        height: '100%'
    },
    bodyTemplate:{
        top:'15%',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        backgroundColor:'#FFFFFF',
        width: deviceDimensions().width,
        
        height: deviceDimensions().height,
    }
})