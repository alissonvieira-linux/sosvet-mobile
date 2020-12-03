import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f7ecff;
`;

export const Header = styled.View`
  margin-top: 50px;
  width: 100%;
`;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const GoBackButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 14px;
  color: #9668cf;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  color: #9668cf;
`;

export const HeaderSubTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #9668cf;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;