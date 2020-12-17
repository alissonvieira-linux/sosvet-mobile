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
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile() {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.removeItem('auth');

    navigation.reset({
      routes: [{ name: 'Preload' }]
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