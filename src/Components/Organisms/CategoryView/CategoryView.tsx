import React from 'react';
import {FlatList, View} from 'react-native';
import {CategoryIcon} from '@atoms';
import globalOrganismStyle from '../Style';
import {Title} from '@atoms';
import data from '../../../data.json';
const CategoryView = () => {
  return (
    <View style={globalOrganismStyle.container}>
      <Title
        text="Categories"
        fontSize={20}
        type="main-title"
        style={globalOrganismStyle.headingTitle}
      />
      <FlatList
        data={data.foods}
        ItemSeparatorComponent={() => (
          <View style={globalOrganismStyle.spaceBetweenItems} />
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
