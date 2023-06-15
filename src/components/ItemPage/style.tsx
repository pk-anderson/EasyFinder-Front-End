import styled from "styled-components";

import { StyleSheet } from "react-native";
import { deviceDimensions } from "../../global/dimesion";

export const styles = StyleSheet.create({
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 0,
        height: -20
        
      },
      menuButton: {
        padding: 0,
        height: -10,
      },
      
      menuContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: deviceDimensions().width * 0.7,
        

      },
      userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      logo: {
        color: 'white',
        fontSize: 30,
        position: 'absolute',
        top: -30,
        left: 110,
      },
})