import React from 'react';
import {HomeScreenTemplate} from '@templates';
import data from '../../../data.json';

const HomeScreen = () => {
  return <HomeScreenTemplate data={data.foods} />;
};

export default HomeScreen;
