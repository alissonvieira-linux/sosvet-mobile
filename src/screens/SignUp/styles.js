import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #9968cf;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px;
  margin-top: 30px;
`;

export const HeaderContainer = styled.View`
  width: 48%;
`;

export const HeaderText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #fff;
`;

export const HeaderImg = styled.Image`
  width: 104px;
  height: 94px;
`

export const FormContainer = styled.View`
  margin-top: 40px;
  flex: 1;
  background-color: #f7ecff;
  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const FormTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #9968cf;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const SignupButton = styled.TouchableOpacity`
  padding: 16px;
  width: 100%;
  border-radius: 4px;
  border-bottom-left-radius: 16px;
  background-color: #08d799;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const SignupButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #fff;
`;

export const ModalContainer = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;

export const ModalText = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 15px;
  color: #222;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #9668cf;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 40px;
`;

export const ModalButtonText = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #fff;
`;