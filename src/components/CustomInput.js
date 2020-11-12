import React from 'react';
import styled from 'styled-components/native';

import { AntDesign, Entypo } from '@expo/vector-icons';

const Container = styled.View`
  width: 100%;
  max-width: 330px;
  height: 45px;
  background-color: #fff;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: 10px;
`;

const Input = styled.TextInput`
  margin-left: 10px;
  font-family: 'Roboto_300Light';
`;

function CustomInput(props) {
  return (
    <Container>
      <Entypo name={props.iconName} size={25} color="#9668CF"  />
      <Input placeholder={props.placeholder} placeholderTextColor="#9668CF" secureTextEntry={props.password} />
    </Container>
  );
}

export default CustomInput;