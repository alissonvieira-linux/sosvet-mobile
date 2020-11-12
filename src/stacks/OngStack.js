import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from '../screens/Incidents';

const Stack = createStackNavigator();

function OngStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Incidents" component={Incidents} />
    </Stack.Navigator>
  );
}

export default OngStack;