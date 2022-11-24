import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 200,
    height: 150,
    borderRadius: 30,
    justifyContent: 'flex-end',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 30,
  },
  overlay: {
    backgroundColor: '#333030',
    width: 200,
    height: 150,
    position: 'absolute',
    opacity: 0.2,
    borderRadius: 30,
  },
  priceAndNameContainer: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    width: 200,
  },
});

export default styles;
