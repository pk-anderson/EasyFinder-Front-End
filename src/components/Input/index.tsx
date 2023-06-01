import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './style';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#000000" // Define a cor do placeholder como branco
      {...props}
    />
  );
};

export default Input;