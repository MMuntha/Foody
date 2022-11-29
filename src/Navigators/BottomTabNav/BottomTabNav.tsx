import React from 'react';
import {HomeScreenTemplate, FavoriteScreenTemplate} from '@templates';
import {FavoriteScreen, HomeScreen} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  FavoriteIconFill,
  HomeIconFill,
  HomeIconOutline,
  FavoriteIconOutline,
} from '@atoms';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeIconFill /> : <HomeIconOutline />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <FavoriteIconFill /> : <FavoriteIconOutline />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
