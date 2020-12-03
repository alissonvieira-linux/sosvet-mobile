import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { customStyle } from '../../utils/CustomMapStyle';
import HappyIcon from '../../assets/Icon.png';

import {
  mapStyle,
  Container,
  CountContainer,
  CountText,
  CalloutView,
  CalloutText
} from './styles';

function Home() {
  const navigation = useNavigation();

  function handleNavigateToProfile() {
    navigation.navigate('PlaceProfile');
  }

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
      >
        <Marker
          image={HappyIcon}
          style={{ height:40, width:40 }}
          coordinate={{
            latitude: -23.2648708,
            longitude: -45.9112412, 
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToProfile} >
            <CalloutView>
              <CalloutText>Vet Quality</CalloutText>
            </CalloutView>
          </Callout>
        </Marker>
      </MapView>

      <CountContainer>
        <CountText>
          17 clínicas e 4 ONGs em sua cidade
        </CountText>
      </CountContainer>
    </Container>
  );
}

export default Home;