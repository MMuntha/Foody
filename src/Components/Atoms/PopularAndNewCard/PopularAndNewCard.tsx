import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './PopularAndNewCard.style';
import {IPopularAndNewCard} from './PopularAndNewCardInterface';
import {Title} from '@atoms';
const PopularAndNewCard = ({image, children}: IPopularAndNewCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.overlay}></View>
      <View style={styles.priceAndNameContainer}>{children}</View>
    </TouchableOpacity>
  );
};
export default PopularAndNewCard;
