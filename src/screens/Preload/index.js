import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/location-image.png';

import { 
  Container,
  LogoImg
} from './styles';

function Preload() {
  const navigation = useNavigation();
  
  useEffect(() => {
    async function handleCheckAuth() {
      const isAuthenticated = await AsyncStorage.getItem('auth');

      if(isAuthenticated === "1") {
        navigation.navigate('TabStack');
      } else {
        navigation.navigate('Login');
      }
    } 

    handleCheckAuth();
  }, []);

  return (
    <Container>
      <LogoImg source={Logo} />
    </Container>
  );
}

export default Preload;