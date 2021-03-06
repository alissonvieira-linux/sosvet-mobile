import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const mapStyle = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const CountContainer = styled.View`
  position: absolute;
  bottom: 50px;
  background-color: #fff;
  height: 50px;
  width: 100%;
  elevation: 1;
  border-radius: 12px;
  padding: 20px;
  justify-content: center;
`;

export const CountText = styled.Text`
  color: #c4c4c4;
  font-family: 'Roboto_700Bold';
  font-size: 14px;
`;

export const CalloutView = styled.View`
  width: 160px;
  height: 50px;
  padding-horizontal: 16px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 4px;
  justify-content: center;
  elevation: 3;
`;

export const CalloutText = styled.Text`
  color: #9669cf;
  font-family: 'Roboto_700Bold';
  font-size: 16px;
`;