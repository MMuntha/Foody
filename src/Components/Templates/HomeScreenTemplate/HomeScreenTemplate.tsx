import React from 'react';
import {StoryView, Header, PopularView, CategoryView} from '@organisms';
const HomeScreenTemplate = () => {
  return (
    <>
      <Header />
      <StoryView />
      <PopularView />
      <CategoryView />
    </>
  );
};
export default HomeScreenTemplate;
