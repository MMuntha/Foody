import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './PrimaryButton.style';
import {IButton} from './PrimaryButton.interface';

const PrimaryButton = ({text, height, width}: IButton) => {
  return (
    <TouchableOpacity
      style={[styles.container, {height: height, width: width}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
