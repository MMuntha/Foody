import React from 'react';
import {View, Image} from 'react-native';
import styles from './PopularAndNewCard.style';
import {IPopularAndNewCard} from './PopularAndNewCardInterface';
import {Title} from '@atoms';
const PopularAndNewCard = ({image, name, price}: IPopularAndNewCard) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../Assets/Images/burger.webp')}
        style={styles.image}
      />
      <View style={styles.overlay}></View>
      <View style={styles.priceAndNameContainer}>
        <View style={styles.nameView}>
          <Title
            type="main-title"
            fontSize={15}
            text="Burger"
            style={styles.text}
          />
        </View>
        <View style={styles.priceView}>
          <Title
            type="main-title"
            fontSize={15}
            text="$ 15.00"
            style={styles.text}
          />
        </View>
      </View>
    </View>
  );
};
export default PopularAndNewCard;
