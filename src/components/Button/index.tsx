import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './style';

interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  borderColor,
  onPress,
  style,
  textStyle
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;