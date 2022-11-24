import * as React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Title} from '@atoms';
import {AStory} from '@molecules';
import data from '../../../data.json';
import globalMoleculeStyle from '../Style';
import styles from './StoryView.style';

const StoryView = () => {
  const arr = [1, 2, 3];

  return (
    <View style={globalMoleculeStyle.container}>
      <View style={globalMoleculeStyle.headingTitle}>
        <Title type="main-title" text="Stories" fontSize={20} />
      </View>
      <View>
        <FlatList
          data={data.foods}
          renderItem={({item}) => (
            <AStory image={item.image} text={item.name} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={globalMoleculeStyle.spaceBetweenItems} />
          )}
        />
      </View>
    </View>
  );
};

export default StoryView;
