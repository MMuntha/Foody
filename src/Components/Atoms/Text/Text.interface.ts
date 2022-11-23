import {TextStyle, StyleProp} from 'react-native';
export interface IText {
  type: 'main-title' | 'sub-title';
  text: string;
  fontSize: number;
  style?: StyleProp<TextStyle>;
}
