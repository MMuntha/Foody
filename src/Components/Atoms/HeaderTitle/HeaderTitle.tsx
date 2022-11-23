import React from 'react';
import {View, Text} from 'react-native';
import styles from './HeaderTitle.style';
import {IHeaderTitle} from './HeaderTitle.interface';
import Title from '../Text/Text';
const HeaderTitle = ({title, subTitle}: IHeaderTitle) => {
  return (
    <View>
      <Title type="main-title" fontSize={25} text="Foody" />
      <Title type="sub-title" fontSize={15} text="Eat Me" />
    </View>
  );
};
export default HeaderTitle;
