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