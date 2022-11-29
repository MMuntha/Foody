import React from 'react';
import {FavoriteView} from '@organisms';
import styles from '../Style';
import {View} from 'react-native';
import {IFavoriteTemplate} from './FavoriteScreenTemplate.interface';

const FavoriteScreenTemplate = ({data}: IFavoriteTemplate) => {
  return (
    <View style={styles.container}>
      <FavoriteView data={data} />
    </View>
  );
};
export default FavoriteScreenTemplate;
