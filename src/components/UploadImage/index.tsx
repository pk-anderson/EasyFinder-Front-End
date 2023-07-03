import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from '@expo/vector-icons'; 
import { style } from './style'

const ImageUploadField: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const handleImageSelect = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    Alert.alert(
      "Selecione uma imagem",
      "Escolha a origem da imagem:",
      [
        {
          text: "Galeria",
          onPress: () => openImagePicker(),
        },
        {
          text: "Câmera",
          onPress: () => openCamera(),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={style.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={style.image} />
      ) : (
        <TouchableOpacity
          style={style.uploadButton}
          onPress={handleImageSelect}
        >
          <Text style={style.uploadButtonText}><FontAwesome name="picture-o" size={24} color="white" /> Adicionar Imagem</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageUploadField;
