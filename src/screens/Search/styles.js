import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F7ECFF;
  padding: 20px;
`;

export const Header = styled.View`
  margin-top: 30px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const TitleView = styled.View`
  width: 100%;
  max-width: 200px;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 18px;
  color: #73529b;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 70px;
`;

export const SearchBox = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const SearchInputArea = styled.View`
  background-color: #fff;
  height: 42px;
  width: 85%;
  border-radius: 20px;
  justify-content: center;
  padding-horizontal: 20px;
`;

export const SearchInput = styled.TextInput`
  font-family: 'Roboto_500Medium';
  font-size: 14px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #73529b;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
`;

export const ResultsBox = styled.ScrollView`
  margin-top: 45px;
  margin-bottom: 30px;
`;