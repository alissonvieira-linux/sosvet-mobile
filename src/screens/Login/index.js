import React from 'react';
import { 
  Container, 
  LoginCard, 
  Logo,
  Slogan,
  SloganBold,
  ButtonCreateAccount
} from './styles';

import CustomInput from '../../components/CustomInput';
import SessionButton from '../../components/SessionButton';

import locationImg from '../../assets/location-image.png';

import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  function handleNavigateToHomeButton() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <LoginCard>
        <Logo source={locationImg} />

        <Slogan>Faça login, <SloganBold>cuide dos bichinhos!</SloganBold></Slogan>

        <CustomInput placeholder="Digite seu e-mail" iconName="mail" password={false} />
        <CustomInput placeholder="Digite sua senha" iconName="lock" password={true} />

        <SessionButton text="ENTRAR" onPress={handleNavigateToHomeButton} />

        <ButtonCreateAccount>
          <Slogan>ou, <SloganBold>crie uma conta agora mesmo!</SloganBold></Slogan>
        </ButtonCreateAccount>
        
      </LoginCard>
    </Container>
  );
}

export default Login;