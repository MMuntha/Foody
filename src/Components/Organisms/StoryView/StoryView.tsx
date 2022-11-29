import * as React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Title} from '@atoms';
import {AStory} from '@molecules';
import {IStoryView} from './StoryView.interface';
import globalOrganismStyls from '../Style';
import styles from './StoryView.style';

const StoryView = ({stories}: IStoryView) => {
  return (
    <View style={globalOrganismStyls.container}>
      <View style={globalOrganismStyls.headingTitle}>
        <Title type="main-title" text="Stories" fontSize={20} />
      </View>
      <View>
        <FlatList
          data={stories}
          renderItem={({item}) => (
            <AStory image={item.image} text={item.name} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={globalOrganismStyls.spaceBetweenItems} />
          )}
        />
      </View>
    </View>
  );
};

export default StoryView;
