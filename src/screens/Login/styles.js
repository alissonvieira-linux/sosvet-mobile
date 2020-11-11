import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #9668CF;
`;

export const LoginCard = styled.View`
  flex: 1;
  background-color: #F7ECFF;
  border-bottom-left-radius: 120px;
  border-top-right-radius: 120px;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Logo = styled.Image`
  width: 190px;
  height: 150px;
  margin-bottom: 60px;
`;

export const Slogan = styled.Text`
  font-size: 16px;
  color: #9668cf;
  font-family: 'Roboto_400Regular';
  margin-bottom: 15px;
`;

export const SloganBold = styled.Text`
  font-family: 'Roboto_700Bold';
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  margin-top: 10px;
`;