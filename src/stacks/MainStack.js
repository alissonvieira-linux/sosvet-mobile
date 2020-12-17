import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import TabStack from './TabStack';
import OngStack from './OngStack';
import PlaceProfile from '../screens/PlaceProfile';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="OngStack" component={OngStack} />
      <Stack.Screen name="PlaceProfile" component={PlaceProfile} />
    </Stack.Navigator>
  );
}

export default MainStack;