import styled from 'styled-components/native';

export const PurpleContainer = styled.View`
  background-color: #73529b;
  width: 100%;
  height: 40%;
  padding: 20px;
`;

export const ActionIcons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const GoBackButton = styled.TouchableOpacity`

`;

export const TitleBox = styled.View`
  width: 100%;
  max-width: 200px;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #fff;
  font-size: 24px;
`;

export const LightContainer = styled.View`
  width: 100%;
  height: 60%;
  background-color: #f7ecff;
`;

export const Card = styled.View`
  position: absolute;
  z-index: 5;
  width: 90%;
  left: 5%;
  right: 5%;
  top: 30%;
  height: 60%;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  elevation: 2;
`;

export const PlaceInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlacePhoto = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #e5e5e5;
`;

export const PlaceName = styled.Text`
  margin-left: 10px;
  color: #222;
  font-family: 'Roboto_700Bold';
  font-size: 18px;
`;

export const AdressBox = styled.View`
  margin-top: 30px;
`;

export const TextLabel = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: #999;
`;

export const SmallText = styled.Text`
  margin-bottom: 20px;
  color: #444;
  font-family: 'Roboto_300Light';
  font-size: 14px;
  text-align: justify;
`;

export const ActionsBox = styled.View`
  margin-top: 40px;
`;

export const WhatsAppButton = styled.TouchableOpacity`
  height: 36px;
  width: 100%;
  background-color: #08d799;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 10px;
`;
export const WhatsAppButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
`;

export const MailButton = styled.TouchableOpacity`
  background-color: #fff;
  border: 2px solid #9a0000;
  width: 100%;
  height: 36px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
`;

export const MailButtonText = styled.Text`
  color: #9a0000;
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  margin-left: 10px;
`;