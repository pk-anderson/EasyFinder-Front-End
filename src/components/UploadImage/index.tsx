import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { style } from './style';

interface ImageUploadFieldProps {
  onSelectImage: (image: string) => void;
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Erro', 'Permissão Negada');
      return;
    }

    Alert.alert('Selecione uma imagem', 'Escolha a origem da imagem:', [
      {
        text: 'Galeria',
        onPress: () => openImagePicker(),
      },
      {
        text: 'Câmera',
        onPress: () => openCamera(),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      onSelectImage(result.uri); // Chama a função para atualizar o estado no componente pai
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      return onSelectImage;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      onSelectImage(result.uri); // Chama a função para atualizar o estado no componente pai
    }
  };

  return (
    <View style={style.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={style.image} />
      ) : (
        <TouchableOpacity style={style.uploadButton} onPress={handleImageSelect}>
          <Text style={style.uploadButtonText}>
            <FontAwesome name="picture-o" size={24} color="white" /> Adicionar Imagem
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageUploadField;
