import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from '../screens/Incidents';
import IncidentDetail from '../screens/IncidentDetail';

const Stack = createStackNavigator();

function OngStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Incidents" component={Incidents} />
      <Stack.Screen name="IncidentDetail" component={IncidentDetail} />
    </Stack.Navigator>
  );
}

export default OngStack;