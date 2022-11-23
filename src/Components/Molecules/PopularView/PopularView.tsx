import React from 'react';
import {View} from 'react-native';
import {PopularAndNewCard, Title} from '@atoms';
import styles from './PopularView.style';

const PopularView = () => {
  return (
    <View style={styles.container}>
      <Title
        type="main-title"
        text="Popular and new"
        fontSize={20}
        style={styles.textView}
      />
      <PopularAndNewCard />
    </View>
  );
};

export default PopularView;
