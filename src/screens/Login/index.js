import React, { useState, useRef } from 'react';
import { 
  Container, 
  LoginCard, 
  Logo,
  Slogan,
  SloganBold,
  ButtonCreateAccount,
  InputContainer,
  Input,
  ModalContainer,
  ModalText,
  ModalButton,
  ModalButtonText
} from './styles';

import SessionButton from '../../components/SessionButton';
import locationImg from '../../assets/location-image.png';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  function handleOpenModal() {
    modalizeRef.current?.open();
  }

  function handleNavigateToHome() {
    navigation.reset({
      routes: [{ name: 'TabStack' }]
    });
  }

  async function handleLogin() {
    if(email === '' || password === '') {
      handleOpenModal();
    } else {
      if (email === 'sosvet@email.com' && password === '123456') {
        await AsyncStorage.setItem('auth', "1");
  
        handleNavigateToHome();
      } else {
        alert('Email ou senha incorretos');
      }
    }
    
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Container>

      <Modalize snapPoint={200} ref={modalizeRef}>
        <ModalContainer>
          <ModalText>Todos os campos devem estar preenchidos.</ModalText>
          <ModalButton onPress={() => modalizeRef.current?.close()}>
            <ModalButtonText>FECHAR</ModalButtonText>
          </ModalButton>
        </ModalContainer>
      </Modalize>
      <LoginCard>
        <Logo source={locationImg} />

        <Slogan>Faça login, <SloganBold>cuide dos bichinhos!</SloganBold></Slogan>

        <InputContainer>
          <Entypo name="mail" size={25} color="#9668CF"  />
          <Input 
            placeholder="Digite seu e-mail"
            placeholderTextColor="#9668CF"
            onChangeText={text => setEmail(text)}
          />
        </InputContainer>
        
        <InputContainer>
          <Entypo name="lock" size={25} color="#9668CF"  />
          <Input 
            placeholder="Digite sua senha"
            placeholderTextColor="#9668CF"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </InputContainer>

        <SessionButton text="ENTRAR" onPress={handleLogin} />

        <ButtonCreateAccount onPress={handleNavigateToSignUp}>
          <Slogan>ou, <SloganBold>crie uma conta agora mesmo!</SloganBold></Slogan>
        </ButtonCreateAccount>
        
      </LoginCard>

    </Container>
  );
}

export default Login;