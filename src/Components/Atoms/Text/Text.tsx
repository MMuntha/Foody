import React from 'react';
import {Text} from 'react-native';
import {IText} from './Text.interface';
import styles from './Text.style';

const Title = ({type, fontSize, text, style, fontColor}: IText) => {
  let mainTitle: boolean = true;

  if (type === 'sub-title') {
    mainTitle = false;
  }
  return (
    <Text
      style={[
        mainTitle ? styles.mainTitle : styles.subTitle,
        {fontSize: fontSize, color: fontColor},
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Title;
