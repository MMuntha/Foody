import React from 'react';
import {FavoriteScreenTemplate} from '@templates';
import data from '../../../data.json';

const FavoriteScreen = () => {
  return <FavoriteScreenTemplate data={data.foods} />;
};

export default FavoriteScreen;
