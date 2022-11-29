import React from 'react';
import {View, FlatList} from 'react-native';
import {Favorite} from '@molecules';
import {Title, PrimaryButton} from '@atoms';
import globalOrganismStyle from '../Style';
import {IFavorite} from './FavoriteView.interface';

const FavoriteView = ({data}: IFavorite) => {
  return (
    <View>
      <Title
        text="Favorites"
        type="main-title"
        fontSize={30}
        style={globalOrganismStyle.headingTitle}
      />
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (item.favorite === true) {
            return (
              <Favorite
                image={item.image}
                price={item.price}
                details={item.details}
                name={item.name}
                favorite={item.favorite}
                onPress={() => (item.favorite = !item.favorite)}
              />
            );
          } else {
            return <></>;
          }
        }}
        ItemSeparatorComponent={() => (
          <View style={globalOrganismStyle.heightSpaceBetweenItems} />
        )}
      />
    </View>
  );
};

export default FavoriteView;
