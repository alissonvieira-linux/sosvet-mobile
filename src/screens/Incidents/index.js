import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  GoBackButton,
  GoBackButtonText,
  HeaderTitle,
  HeaderSubTitle,
  Scroll
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import IncidentItem from '../../components/IncidentItem';

function Incidents() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <GoBackButton onPress={handleGoBack}>
          <MaterialIcons name="keyboard-arrow-left" size={35} color="#9668cf" />
          <GoBackButtonText>Total de 1 caso(s)</GoBackButtonText>
        </GoBackButton>

        <HeaderTitle>Bem-vindo!</HeaderTitle>
        <HeaderSubTitle>Escolha um caso e salve o dia</HeaderSubTitle>
      </Header>

      <Scroll showsVerticalScrollIndicator={false}>
        <IncidentItem />
      </Scroll>
    </Container>
  );
}

export default Incidents;