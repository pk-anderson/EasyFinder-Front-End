import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import menuImg from '../../assets/menu-aberto.png';
import { deviceDimensions } from "../../global/dimesion";
import { styles } from './style';

type AppTopBarProps = {
  // Adicione as propriedades necessárias
};

const AppTopBar: React.FC<AppTopBarProps> = () => {
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

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
      <Text style={styles.logo}>LOGO</Text>
    </View>
  );
}

export default AppTopBar;