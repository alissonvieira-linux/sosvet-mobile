import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { 
  useFonts, 
  Roboto_300Light, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';

import MainStack from './src/stacks/MainStack';

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;