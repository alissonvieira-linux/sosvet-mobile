import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-radius: 12px;
  margin-top: 30px;
  padding: 30px;
  elevation: 2;
`;

const ItemCategory = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #999;
  font-size: 16px;
`;

const ItemValue = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 14px;
  color: #c4c4c4;
  margin-bottom: 20px;
`;

const ButtonNavigateToDetail = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #9668cf;
`;

function IncidentItem() {
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate('IncidentDetail');
  }

  return (
    <Container>
      <ItemCategory>ONG:</ItemCategory>
      <ItemValue>Patinhas do Bem - SJC</ItemValue> 

      <ItemCategory>CASO:</ItemCategory>
      <ItemValue>Cadelinha atropelada na avenida andrômeda</ItemValue>

      <ItemCategory>VALOR:</ItemCategory>
      <ItemValue>R$250,00</ItemValue> 

      <ButtonNavigateToDetail onPress={handleNavigateToDetail}>
        <ButtonText>Ver mais detalhes</ButtonText>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#9668cf" />
      </ButtonNavigateToDetail>
    </Container>
  );
}

export default IncidentItem;