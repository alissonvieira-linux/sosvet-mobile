import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import TabStack from './TabStack';
import OngStack from './OngStack';
import PlaceProfile from '../screens/PlaceProfile';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="OngStack" component={OngStack} />
      <Stack.Screen name="PlaceProfile" component={PlaceProfile} />
    </Stack.Navigator>
  );
}

export default MainStack;