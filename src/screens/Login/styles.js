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

export const InputContainer = styled.View`
  width: 100%;
  height: 45px;
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  margin-left: 10px;
  font-family: 'Roboto_300Light';
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