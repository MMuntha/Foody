import React from 'react';
import {FlatList, View} from 'react-native';
import {CategoryIcon} from '@atoms';
import globalMoleculeStyle from '../Style';
import {Title} from '@atoms';
import data from '../../../data.json';
const CategoryView = () => {
  return (
    <View style={globalMoleculeStyle.container}>
      <Title
        text="Categories"
        fontSize={20}
        type="main-title"
        style={globalMoleculeStyle.headingTitle}
      />
      <FlatList
        data={data.foods}
        ItemSeparatorComponent={() => (
          <View style={globalMoleculeStyle.spaceBetweenItems} />
        )}
        renderItem={({item}) => (
          <View>
            <CategoryIcon />
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default CategoryView;
