import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #9668CF;
  width: 100%;
  max-width: 330px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-bottom-left-radius: 16px;
  margin-top: 20px;
`;

const Text = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #fff;
  font-size: 18px;
`;

function SessionButton(props) {
  return (
    <Container onPress={props.onPress}>
      <Text>{props.text}</Text>
    </Container>
  );
}

export default SessionButton;