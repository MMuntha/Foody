import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './PopularAndNewCard.style';
import {IPopularAndNewCard} from './PopularAndNewCardInterface';
import {Title} from '@atoms';
const PopularAndNewCard = ({image, name, price}: IPopularAndNewCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.overlay}></View>
      <View style={styles.priceAndNameContainer}>
        <View style={styles.nameView}>
          <Title
            type="main-title"
            fontSize={15}
            text={name}
            style={styles.text}
          />
        </View>
        <View style={styles.priceView}>
          <Title
            type="main-title"
            fontSize={15}
            text={price}
            style={styles.text}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PopularAndNewCard;
