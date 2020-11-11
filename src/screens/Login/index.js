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
import CustomButton from '../../components/CustomButton';

import locationImg from '../../assets/location-image.png';

function Login() {
  return (
    <Container>
      <LoginCard>
        <Logo source={locationImg} />
        <Slogan>Faça login, <SloganBold>cuide dos bichinhos!</SloganBold></Slogan>
        <CustomInput placeholder="Digite seu e-mail" iconName="mail" />
        <CustomInput placeholder="Digite sua senha" iconName="lock" />
        <CustomButton text="ENTRAR" />

        <ButtonCreateAccount>
          <Slogan>ou, <SloganBold>crie uma conta agora mesmo!</SloganBold></Slogan>
        </ButtonCreateAccount>
        
      </LoginCard>
    </Container>
  );
}

export default Login;