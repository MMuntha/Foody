import React from 'react';
import {View, FlatList} from 'react-native';
import {PopularAndNewCard, Title} from '@atoms';
import styles from './PopularView.style';
import data from '../../../data.json';

const PopularView = () => {
  return (
    <View style={styles.container}>
      <Title
        type="main-title"
        text="Popular and new"
        fontSize={20}
        style={styles.textView}
      />
      <FlatList
        data={data.foods}
        renderItem={({item}) => (
          <PopularAndNewCard
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularView;
