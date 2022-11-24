import React from 'react';
import {View, FlatList} from 'react-native';
import {PopularAndNewCard, Title} from '@atoms';
import {PopularAndNew} from '@molecules';
import data from '../../../data.json';
import globalMoleculeStyle from '../Style';

const PopularView = () => {
  return (
    <View style={globalMoleculeStyle.container}>
      <Title
        type="main-title"
        text="Popular and new"
        fontSize={20}
        style={globalMoleculeStyle.headingTitle}
      />
      <FlatList
        data={data.foods}
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
          <View style={globalMoleculeStyle.spaceBetweenItems} />
        )}
      />
    </View>
  );
};

export default PopularView;
