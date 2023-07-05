import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IProps {
  id:string
  name: string;
  description: string;
  objectImage: string;
  isLosted:string
}

export default function Item(props: IProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri:`https://easy-finder.onrender.com/${props.objectImage}`}} style={styles.img} />
      <View style={styles.textContent}>
        <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
        <Text>{props.description}</Text>
      </View>
      <View style={styles.dateContainer}>
      
      </View>
    </View>
  );
}
