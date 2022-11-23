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
  },
  overlay: {
    backgroundColor: '#333030',
    width: 200,
    height: 150,
    position: 'absolute',
    opacity: 0.2,
    borderRadius: 20,
  },
  priceAndNameContainer: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    width: 200,
  },
  nameView: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 5,
  },
  priceView: {
    backgroundColor: '#E42021',
    borderRadius: 10,
    padding: 5,
  },
  text: {
    color: 'white',
  },
});

export default styles;
