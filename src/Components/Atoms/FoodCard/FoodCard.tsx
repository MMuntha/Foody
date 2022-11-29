import React, {Children} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './FoodCard.style';
import {IFoodCard} from './FoodCard.interface';

const FoodCard = ({image, children}: IFoodCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.detailsView}>{children}</View>
    </View>
  );
};
export default FoodCard;
