import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import TabStack from './TabStack';
import OngStack from './OngStack';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="OngStack" component={OngStack} />
    </Stack.Navigator>
  );
}

export default MainStack;