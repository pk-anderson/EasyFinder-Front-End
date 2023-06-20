import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import menuImg from '../../assets/menu-aberto.png';
import { deviceDimensions } from "../../global/dimesion";
import { styles } from './style';
const logoImage = require('../../assets/logo.png');
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../routes";

type AppTopBarProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};



const AppTopBar: React.FC<AppTopBarProps> = ({ navigation }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditProfile = () => {
    // Lógica para realizar o logout
    console.log('Edit Profile');
  };

  const handleLogout = () => {
    // Lógica para realizar o logout
    console.log('Logout');
  };
  
  const handleRegisterItem = () => {
    navigation.navigate('RegisterItem');
  };
  

  return (
    <View style={styles.containerTop}>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuToggle}>
        <Image source={menuImg} style={styles.menuIcon} />
      </TouchableOpacity>

      {/* Menu Lateral */}
      <Modal visible={isMenuOpen} animationType="slide" transparent>
        <View style={styles.menuContainer}>
          <View style={styles.userInfoContainer}>
            <Image source={require('../../assets/avatar.jpg')} style={styles.userPhoto} />
          <Text style={styles.userName}>{ "Nome do usuário" }</Text>
          </View>

          <TouchableOpacity style={styles.menuItem} onPress={handleMenuToggle}>
            <Text style={styles.menuItemText}>Voltar ao Início</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
            <Text style={styles.menuItemText}>Visualizar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleRegisterItem}>
            <Text style={styles.menuItemText}>Cadastrar Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleMenuToggle}>
            <Text style={styles.menuItemText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
      <Image source={logoImage} style={styles.logo} />
    </View>
  );
}

export default AppTopBar;