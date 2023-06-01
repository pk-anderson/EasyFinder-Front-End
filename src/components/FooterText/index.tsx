import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

interface FooterTextProps {
  text: string;
}

const FooterText: React.FC<FooterTextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default FooterText