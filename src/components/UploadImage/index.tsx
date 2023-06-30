import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { style } from './style'

const ImageUploadField: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageSelect = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
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
          <Text style={style.uploadButtonText}>Adicionar Imagem</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageUploadField;