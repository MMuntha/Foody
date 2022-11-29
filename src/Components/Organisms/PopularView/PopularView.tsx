import React from 'react';
import {View, FlatList} from 'react-native';
import {PopularAndNewCard, Title} from '@atoms';
import {PopularAndNew} from '@molecules';
import {IPopularView} from './PopularView.interface';
import globalOrganismStyle from '../Style';

const PopularView = ({popularAndNew}: IPopularView) => {
  return (
    <View style={globalOrganismStyle.container}>
      <Title
        type="main-title"
        text="Popular and new"
        fontSize={20}
        style={globalOrganismStyle.headingTitle}
      />
      <FlatList
        data={popularAndNew}
        renderItem={({item}) => (
          <PopularAndNew
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={globalOrganismStyle.spaceBetweenItems} />
        )}
      />
    </View>
  );
};

export default PopularView;
