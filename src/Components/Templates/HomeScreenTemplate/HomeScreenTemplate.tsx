import React from 'react';
import {StoryView, Header, PopularView, CategoryView} from '@organisms';
import {View} from 'react-native';
import globalTemplateStyle from '../Style';
import {IHomeScreenTemplate} from './HomeScreenTemplate.interface';

const HomeScreenTemplate = ({data}: IHomeScreenTemplate) => {
  return (
    <View style={globalTemplateStyle.container}>
      <View style={globalTemplateStyle.organismView}>
        <Header />
      </View>
      <View style={globalTemplateStyle.organismView}>
        <StoryView stories={data} />
      </View>
      <View style={globalTemplateStyle.organismView}>
        <PopularView popularAndNew={data} />
      </View>
      <View style={globalTemplateStyle.organismView}>
        <CategoryView />
      </View>
    </View>
  );
};
export default HomeScreenTemplate;
