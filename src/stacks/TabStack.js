import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <>
    <StatusBar backgroundColor="#fff" style="dark" />
    <Tab.Navigator 
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </>
  );
}

export default TabStack;