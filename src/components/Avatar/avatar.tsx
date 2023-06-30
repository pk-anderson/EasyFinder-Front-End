import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface AvatarProps {
  image: string;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;