import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  Card,
  UserInfoBox,
  UserProfilePhoto,
  UserName,
  UserAccountInfo,
  UserMailLabel,
  UserMail
} from './styles';

import { FontAwesome } from '@expo/vector-icons';
import SessionButton from '../../components/SessionButton';

function Profile() {
  const navigation = useNavigation();

  function handleLogout() {
    navigation.reset({
      routes: [{ name: 'Login' }]
    });
  }

  return (
    <Container>
      <Header>
        <Title>Suas informações Pessoais</Title>
      </Header>

      <Card>
        <UserInfoBox>
          <UserProfilePhoto>
            <FontAwesome name="user-circle" size={130} color="#ccc" />
          </UserProfilePhoto>
          <UserName>Alisson Vieira</UserName>
        </UserInfoBox>

        <UserAccountInfo>
          <UserMailLabel>
            Endereço de e-mail
          </UserMailLabel>
          <UserMail>alissonvieira.sosvet@devAcademy.com</UserMail>
        </UserAccountInfo>

        <SessionButton 
          text="ENCERRAR SESSÃO" 
          onPress={handleLogout}
        />
      </Card>
      
    </Container>
  );
}

export default Profile;