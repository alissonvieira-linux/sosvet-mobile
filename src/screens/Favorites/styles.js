import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #9668cf;
`;

export const Header = styled.View`
  width: 100%;
  max-width: 200px;
  padding: 30px;
  margin-bottom: 60px;
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
  padding: 10px;
`;

export const Scroll = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 30px;
`;