import {StyleSheet} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 150,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 8, height: 4},
    shadowColor: '#B7B7B7',
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  overlay: {
    backgroundColor: '#333030',
    width: 150,
    height: 200,
    position: 'absolute',
    opacity: 0.5,
    borderRadius: 20,
  },
  text: {
    position: 'absolute',
    color: 'white',
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 20,
  },
});

export default styles;
