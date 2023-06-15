import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import menuImg from '../../assets/menu-aberto.png';
import { deviceDimensions } from "../../global/dimesion";
import { styles } from '../ItemPage/style';

type AppTopBarProps = {
  // Adicione as propriedades necessárias
};



const ItemTopBar: React.FC<AppTopBarProps> = () => {
 
  
  

  return (
    <View style={styles.containerTop}>
      <TouchableOpacity style={styles.menuButton}>
        
      </TouchableOpacity>

      <Text style={styles.logo}>Item Name</Text>
    </View>
  );
}

export default ItemTopBar;