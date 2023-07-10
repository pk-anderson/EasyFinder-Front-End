import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IProps {
  id: string;
  name: string;
  description: string;
  objectImage: string;
  isLosted: string;
  onDelete: () => void;
  onEdit: () => void;
}

export default function MyItem(props: IProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `https://easy-finder.onrender.com/${props.objectImage}` }} style={styles.img} />
      <View style={styles.textContent}>
        <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
        <Text>{props.description}</Text>
      </View>
      <View style={styles.dateContainer}></View>
      <TouchableOpacity onPress={props.onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onEdit} style={styles.editButton}>
        <Text style={styles.editText}>E</Text>
      </TouchableOpacity>
    </View>
  );
}
