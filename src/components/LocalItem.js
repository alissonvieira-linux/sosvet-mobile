import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 120px;
  background-color: #fff;
  border-radius: 4px;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LocalImg = styled.View`
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
`;

const LocalInfoBox = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const LocalName = styled.Text`
  color: #73529b;
  font-size: 14px;
  font-family: 'Roboto_700Bold';
`;

const LocalCity = styled.Text`
  color: #c4c4c4;
  font-family: 'Roboto_300Light';
  font-size: 13px;
`;

const ProfileButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #73529b;
  border-radius: 4px;
  margin-top: 20px;
`;

const ProfileButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #73529b;
  font-size: 12px;
`;

function LocalItem() {
  return (
    <Container>
      <LocalImg />
      <LocalInfoBox>
        <LocalName>Patinhas do Bem - SJC</LocalName>
        <LocalCity>São José dos Campos</LocalCity>

        <ProfileButton>
          <ProfileButtonText>VISUALIZAR PERFIL</ProfileButtonText>
        </ProfileButton>
      </LocalInfoBox>
    </Container>
  );
}

export default LocalItem;