import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

export const Input = styled.TextInput`
  width: ${WIDTH - 66}px;
  height: 45px;
  border-radius: 25px;
  padding-left: 45px;
  margin-top: 12px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: transparent;
  border-color: #22DF2299;
  border-width: 2px;
  color: green;
  font-size: 14px;
  font-weight: bold;
`;

export const ViewInput = styled.View`
  flex: 2;
  justify-content: center;
`;
