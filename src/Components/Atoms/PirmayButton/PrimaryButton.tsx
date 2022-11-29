import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './PrimaryButton.style';
import {IButton} from './PrimaryButton.interface';

const PrimaryButton = ({text, height, width, fontSize}: IButton) => {
  return (
    <TouchableOpacity
      style={[styles.container, {height: height, width: width}]}>
      <Text style={[styles.text, {fontSize: fontSize}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
