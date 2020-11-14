import React from 'react';

import {
  Container,
  Header,
  Title,
  Card,
  Scroll
} from './styles';

import LocalItem from '../../components/LocalItem';

function Favorites() {
  return (
    <Container>
      <Header>
        <Title>Seus lugares Favoritos</Title>
      </Header>
      
      <Card>
        <Scroll showsVerticalScrollIndicator={false}>
          <LocalItem />
          <LocalItem />
          <LocalItem />
          <LocalItem />
          <LocalItem />
          <LocalItem />
          <LocalItem />
          <LocalItem />
        </Scroll>
      </Card>
    </Container>
  );
}

export default Favorites;