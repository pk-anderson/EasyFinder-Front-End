import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import menuImg from '../../assets/menu-aberto.png';
import { deviceDimensions } from "../../global/dimesion";
import { styles } from './style';
const logoImage = require('../../assets/logo.png');
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../routes";
import { listMyLostObjects } from '../../api/lostObject/ListMyLostObjects';
import { AuthContext } from '../../../AuthContext';
import { getUniqueUser } from '../../api/user/getUserByEmail';
import { listLostObjects } from '../../api/user/ListLostObjects';

type AppTopBarProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

const AppTopBar: React.FC<AppTopBarProps> = ({ navigation }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, userEmail } = useContext(AuthContext);

  const handleMenuToggle = async () => {
    setIsMenuOpen(!isMenuOpen);
    let itens = await listLostObjects(token!)
    navigation.navigate('Dashboard', itens)
  };

  const handleSeeProfile = () => {
    navigation.navigate('Profile')
  };

  const handleLogout = () => {
    navigation.navigate('Home')
  };
  
  const handleRegisterItem = () => {
    navigation.navigate('RegisterItem');
  };

  const handleListMyLostObjects = async () => {
    let user = await getUniqueUser(userEmail!, token!)
    let itens = await listMyLostObjects(token!, user?.data.id)
    navigation.navigate('LostItemByUserScreen', itens)
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

          <TouchableOpacity style={styles.menuItem} onPress={handleSeeProfile}>
            <Text style={styles.menuItemText}>Visualizar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleRegisterItem}>
            <Text style={styles.menuItemText}>Cadastrar Objeto Perdido</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleListMyLostObjects}>
            <Text style={styles.menuItemText}>Meus Objetos Cadastrados</Text>
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