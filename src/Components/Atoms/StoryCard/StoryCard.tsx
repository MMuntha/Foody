import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IStoryCard} from './StoryCard.interface';
import styles from './StoryCard.style';
import Title from '../Text/Text';
const StoryCard = ({name, image}: IStoryCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.overlay}></View>
      <Title type="main-title" fontSize={30} text={name} style={styles.text} />
    </TouchableOpacity>
  );
};

export default StoryCard;
