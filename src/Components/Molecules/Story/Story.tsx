import React from 'react';
import {StoryCard, Title} from '@atoms';
import {IStory} from './Story.interface';
const AStory = ({text, image}: IStory) => {
  return (
    <StoryCard image={image}>
      <Title fontSize={30} text={text} type="main-title" fontColor="white" />
    </StoryCard>
  );
};

export default AStory;
