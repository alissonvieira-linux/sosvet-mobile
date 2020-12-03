import React from 'react';

import {
  Container,
  Header,
  TitleView,
  Title,
  Logo,
  SearchBox,
  SearchInputArea,
  SearchInput,
  SearchButton,
  ResultsBox
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import logoImg from '../../assets/location-image.png';

import LocalItem from '../../components/LocalItem';

function Search() {
  return (
    <Container>
      <Header>
        <TitleView>
          <Title>Encontre uma clínica, ou apoie uma ong!</Title>
        </TitleView>
       
        <Logo source={logoImg} />
      </Header>

      <SearchBox>
        <SearchInputArea>
          <SearchInput 
            placeholder="Digite o nome de uma clínica ou ong..." 
            placeholderTextColor="#e5e5e5"
          />
        </SearchInputArea>
       
        <SearchButton>
          <MaterialIcons name="my-location" color="#fff" size={25} />
        </SearchButton>
      </SearchBox>

      <ResultsBox showsVerticalScrollIndicator={false}>
        <LocalItem />
      </ResultsBox>
     
      
    </Container>
  );
}

export default Search;