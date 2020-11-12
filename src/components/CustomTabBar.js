import React from 'react';
import styled from 'styled-components/native';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Container = styled.View`
  background-color: #bd93f3;
  height: 55px;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 2px solid #73529b;
  margin-top: -40px;
`;

const TabItemText = styled.Text`
  font-family: 'Roboto_300Light';
  font-size: 11px;
  text-align: center;
`;

function CustomTabBar({ state, navigation }) {
  function goTo(screenName) {
    navigation.navigate(screenName);
  }

  return (
    <Container>
      <TabItem onPress={() => goTo('Home')}>
        <Entypo name="home" color={ state.index === 0 ? '#fff' : '#73529b' } size={25} />
        <TabItemText style={{ color: state.index === 0 ? '#fff' : '#73529b' }}>Início</TabItemText>
      </TabItem>

      <TabItem onPress={() => goTo('Search')}>
        <MaterialIcons name="search" color={ state.index === 1 ? '#fff' : '#73529b' } size={25} />
        <TabItemText style={{ color: state.index === 1 ? '#fff' : '#73529b' }}>Encontrar</TabItemText>
      </TabItem>

      <TabItem onPress={() => goTo('OngStack')}>
        <TabItemCenter>
          <MaterialCommunityIcons name="dog" color="#73529b" size={36} />
        </TabItemCenter>
        <TabItemText style={{ color:'#73529b' }}>Apoie uma ONG</TabItemText>
      </TabItem>

      <TabItem onPress={() => goTo('Favorites')}>
        <Entypo name="heart-outlined" color={ state.index === 2 ? '#fff' : '#73529b' } size={25} />
        <TabItemText style={{ color: state.index === 2 ? '#fff' : '#73529b' }}>Favoritos</TabItemText>
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <FontAwesome name="user-circle" color={ state.index === 3 ? '#fff' : '#73529b' } size={25} />
        <TabItemText style={{ color: state.index === 3 ? '#fff' : '#73529b' }}>Perfil</TabItemText>
      </TabItem>
    </Container>
  );
}

export default CustomTabBar;