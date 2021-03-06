import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  PurpleContainer,
  ActionIcons,
  GoBackButton,
  FavoriteButton,
  TitleBox,
  Title,
  LightContainer,
  Card,
  PlaceInfo,
  PlacePhoto,
  PlaceName,
  AdressBox,
  TextLabel,
  SmallText,
  GoogleMapsButton,
  GoogleMapsButtonText,
  ActionsBox,
  WhatsAppButton,
  WhatsAppButtonText,
  MailButton,
  MailButtonText,
} from './styles';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

function PlaceProfile() {
  const navigation = useNavigation();

  const [placeName, setPlaceName] = useState('Vet Quality - Hospital Veterinário');
  const [favorite, setFavorite] = useState(true);

  useEffect(() => {
    const validatedName = verifyNameString(placeName);
    setPlaceName(validatedName);
  }, []);

  function verifyNameString(string) {
    if (string.length > 26) {
      return `${string.slice(0,26)}...`;
    }
    
    return string;
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL('whatsapp://send?phone=5512988681090&text=Olá');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'SOS VET | Novo contato',
      recipients: ['alissonvieira.github@gmail.com'],
      body: 'Olá, estou entrando em contato por meio do SOS VET para conhecer um pouco mais do Vet Quality.'
    });
  }

  function handleOpenGoogleMaps() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${-23.2648708},${-45.9112412}`);
  }
  
  return (
    <>
      <PurpleContainer>
        <ActionIcons>
          <GoBackButton onPress={handleGoBack}>
            <MaterialIcons name="keyboard-arrow-left" size={35} color="#fff" />
          </GoBackButton>

          <FavoriteButton onPress={() => setFavorite(!favorite)}>
            {
              favorite ? <Entypo name="heart" size={30} color="#fff" />
              : <Entypo name="heart-outlined" size={30} color="#fff" />
            }
          </FavoriteButton>
        </ActionIcons>

        <TitleBox>
            <Title>Informações Disponíveis</Title>
          </TitleBox>
      </PurpleContainer>
      <LightContainer />

      <Card>
        <PlaceInfo>
          <PlacePhoto />
          <PlaceName> {placeName} </PlaceName>          
        </PlaceInfo>

        <AdressBox>
            <TextLabel>Endereço</TextLabel>
            <SmallText>Rua Pedro Rachid, 304 - Santana</SmallText>

            <TextLabel>Contato</TextLabel>
            <SmallText>(12)98765-4321</SmallText>

            <TextLabel>Veja como chegar</TextLabel>
            <GoogleMapsButton onPress={handleOpenGoogleMaps}>
              <GoogleMapsButtonText>Ver rotas no Google Maps</GoogleMapsButtonText>
            </GoogleMapsButton>
          </AdressBox>

          <ActionsBox>
            <TextLabel>Ou, se preferir</TextLabel>

            <WhatsAppButton onPress={sendWhatsapp}>
              <FontAwesome name="whatsapp" size={20} color="#fff" />
              <WhatsAppButtonText>
                Envie uma mensagem
              </WhatsAppButtonText>
            </WhatsAppButton>

            <MailButton onPress={sendMail}>
              <Entypo name="mail" size={20} color="#9a0000" />
              <MailButtonText>
                Envie um e-mail
              </MailButtonText>
            </MailButton>
          </ActionsBox>
      </Card>
    </>
  );
}

export default PlaceProfile;