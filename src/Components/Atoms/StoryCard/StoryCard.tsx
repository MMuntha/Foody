import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {IStoryCard} from './StoryCard.interface';
import styles from './StoryCard.style';
const StoryCard = ({image, children}: IStoryCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.overlay}></View>
      <View style={styles.text}>{children}</View>
    </TouchableOpacity>
  );
};

export default StoryCard;
