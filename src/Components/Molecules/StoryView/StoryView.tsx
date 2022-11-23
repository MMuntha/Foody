import * as React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Title, StoryCard} from '@atoms';
import data from '../../../data.json';
import styles from './StoryView.style';

const StoryView = () => {
  const arr = [1, 2, 3];

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Title type="main-title" text="Stories" fontSize={20} />
      </View>
      <View>
        <FlatList
          data={data.foods}
          renderItem={({item}) => (
            <StoryCard image={item.image} name={item.name} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default StoryView;
