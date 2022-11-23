import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './CategoryIcon.style';
import {Title} from '@atoms';
const CategoryIcon = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Title
        type={'main-title'}
        text="Snacks"
        fontSize={20}
        style={styles.text}
      />
    </TouchableOpacity>
  );
};

export default CategoryIcon;
