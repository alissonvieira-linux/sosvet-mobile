import React from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { customStyle } from '../../utils/CustomMapStyle';

import {
  mapStyle,
  Container,
  CountContainer,
  CountText
} from './styles';

function Home() {
  return (
    <Container>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={mapStyle}
        initialRegion={{
          latitude: -23.2648708,
          longitude: -45.9112412,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
        customMapStyle={customStyle}
      />

      <CountContainer>
        <CountText>
          17 clínicas e 4 ONGs em sua cidade
        </CountText>
      </CountContainer>
    </Container>
  );
}

export default Home;