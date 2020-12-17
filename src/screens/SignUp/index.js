import React, { useRef, useState } from 'react';

import {
  Container,
  Header,
  HeaderContainer,
  HeaderText,
  HeaderImg,
  FormContainer,
  FormTitle,
  SignupButton,
  SignupButtonText,
  ModalContainer,
  ModalText,
  ModalButton,
  ModalButtonText
} from './styles';

import catImg from '../../assets/cat.png';
import CustomInput from '../../components/CustomInput';
import { Modalize } from 'react-native-modalize';

function SignUp() {
  const modalizeRef = useRef(null);

  function handleOpenModal() {
    modalizeRef.current?.open();
  }

  return (
    <Container>
      <Modalize snapPoint={200} ref={modalizeRef}>
        <ModalContainer>
          <ModalText>Cadastro finalizado com sucesso.</ModalText>
          <ModalButton onPress={() => modalizeRef.current?.close()}>
            <ModalButtonText>FECHAR</ModalButtonText>
          </ModalButton>
        </ModalContainer>
      </Modalize>

      <Header>
        <HeaderContainer>
          <HeaderText>Registre-se e faça o bem, sem olhar a quem.</HeaderText>
        </HeaderContainer>
        
        <HeaderImg source={catImg} />
      </Header>

      <FormContainer>
        <FormTitle>Primeiro, precisamos de algumas informações</FormTitle>

        <CustomInput iconName="mail" placeholder="Digite seu e-mail" />
        <CustomInput iconName="user" placeholder="Digite seu nome completo" />
        <CustomInput iconName="lock" placeholder="Crie uma senha de acesso" password/>

        <SignupButton onPress={handleOpenModal}>
          <SignupButtonText>FINALIZAR CADASTRO</SignupButtonText>
        </SignupButton>

      </FormContainer>

    </Container>
  );
}

export default SignUp;