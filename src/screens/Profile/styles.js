import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #9668cf;
`;

export const Header = styled.View`
  width: 100%;
  max-width: 250px;
  padding: 30px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #fff;
`;

export const Card = styled.View`
  flex: 1;
  background-color: #f7ecff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 20px;
`;

export const UserInfoBox = styled.View`
  width: 100%;
  align-items: center;
`;

export const UserProfilePhoto = styled.View`
  width: 130px;
  height: 130px;
  background-color: #e5e5e5;
  border-radius: 65px;
  margin-top: -60px;
`;

export const UserName = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-family: 'Roboto_500Medium';
  color: #222;
`;

export const UserAccountInfo = styled.View`
  margin-top: 20px;
  
`;

export const UserMailLabel = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: 16px;
  color: #999;
`;

export const UserMail = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 14px;
  color: #c4c4c4;
`;