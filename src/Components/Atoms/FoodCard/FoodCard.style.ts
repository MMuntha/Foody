import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const containerWidth = windowWidth - 20;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: windowWidth - 20,
    height: 150,
    maxHeight: 150,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageContainer: {
    backgroundColor: 'green',
    height: 150,
    width: containerWidth * 0.3,
  },
  detailsView: {
    padding: 10,
    maxWidth: containerWidth * 0.7,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
