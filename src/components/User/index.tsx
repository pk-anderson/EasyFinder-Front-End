import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IProps {
  name: string;
  data: any;
}

export default function User(props: IProps) {
  return (
    <Text>{props.data.name}</Text>
  );
}
