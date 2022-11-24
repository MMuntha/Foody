import React from 'react';
import {View} from 'react-native';
import {PopularAndNewCard, Title} from '@atoms';
import {IPopularAndNew} from './PopularAndNew.interface';
import styles from './PopularAndNew.style';
const PopularAndNew = ({image, name, price}: IPopularAndNew) => {
  return (
    <PopularAndNewCard image={image}>
      <>
        <View style={styles.nameView}>
          <Title
            type="main-title"
            fontSize={15}
            text={name}
            fontColor="white"
          />
        </View>
        <View style={styles.priceView}>
          <Title
            type="main-title"
            fontSize={15}
            text={price}
            fontColor="white"
          />
        </View>
      </>
    </PopularAndNewCard>
  );
};
export default PopularAndNew;
