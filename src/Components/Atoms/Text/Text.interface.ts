import {TextStyle, StyleProp} from 'react-native';
export interface IText {
  type: 'main-title' | 'sub-title';
  text: string;
  fontSize: number;
  fontColor?: string;
  style?: StyleProp<TextStyle>;
}
