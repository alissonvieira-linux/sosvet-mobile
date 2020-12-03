import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  PurpleContainer,
  ActionIcons,
  GoBackButton,
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

function IncidentDetail() {
  const navigation = useNavigation();

  const message = "Olá, estou entrando em contato para ajudar no caso da cadela atropelada.";
  const [placeName, setPlaceName] = useState('Patinhas do Bem - SJC');

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
    Linking.openURL(`whatsapp://send?phone=5512988681090&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'SOS VET | Novo contato',
      recipients: ['alissonvieira.github@gmail.com'],
      body: message
    });
  }
  
  return (
    <>
      <PurpleContainer>
        <ActionIcons>
          <GoBackButton onPress={handleGoBack}>
            <MaterialIcons name="keyboard-arrow-left" size={35} color="#fff" />
          </GoBackButton>
        </ActionIcons>

        <TitleBox>
            <Title>Detalhes do caso selecionado</Title>
          </TitleBox>
      </PurpleContainer>
      <LightContainer />

      <Card>
        <PlaceInfo>
          <PlacePhoto />
          <PlaceName> {placeName} </PlaceName>          
        </PlaceInfo>

        <AdressBox>
            <TextLabel>Caso</TextLabel>
            <SmallText>Cadelinha atropelada na avenida andrômeda</SmallText>

            <TextLabel>Descrição do caso</TextLabel>
            <SmallText>
              Uma cadelinha foi atropelada enquanto atravessava
              a avenida. Ela precisa de uma cirurgia para consertar
              sua patinha e voltar a andar normalmente.
            </SmallText>

            <TextLabel>Valor necessário</TextLabel>
            <SmallText>R$250,00</SmallText>
          </AdressBox>

          <ActionsBox>
            <TextLabel>Salve o dia! Seja o herói desse caso.</TextLabel>

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

export default IncidentDetail;