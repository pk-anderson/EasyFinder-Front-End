import { Image, ImageSourcePropType, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IProps {
  name: string;
  data: any;
}

export default function User(props: IProps) {

  console.log(props.name)

  return (
    <Text>{props.name}</Text>
  );
}
