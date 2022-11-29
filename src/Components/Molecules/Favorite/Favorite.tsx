import React, {useState} from 'react';
import {FoodCard} from '@atoms';
import {View, TouchableOpacity} from 'react-native';
import {Title} from '@atoms';
import styles from './Favorite.style';
import {FavoriteIconFill, FavoriteIconOutline} from '@atoms';
import {IFavorite} from './Favorite.interface';

const Favorite = ({
  favorite,
  onPress,
  image,
  name,
  details,
  price,
}: IFavorite) => {
  return (
    <FoodCard image={image}>
      <>
        <View>
          <Title fontSize={20} type="main-title" text={name} />
          <Title fontSize={10} type="sub-title" text={details} />
        </View>
        <View style={styles.priceAndIconContainer}>
          <Title fontSize={20} type="main-title" text={price} />
          <TouchableOpacity onPress={onPress}>
            {favorite ? <FavoriteIconFill /> : <FavoriteIconOutline />}
          </TouchableOpacity>
        </View>
      </>
    </FoodCard>
  );
};

export default Favorite;
