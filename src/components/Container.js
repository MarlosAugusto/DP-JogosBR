import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.bg ? 'transparent' : '#DFDFD9'};
  flex: 1;
  justify-content: ${props => props.centered ? 'center' : 'flex-start'};
  align-items: center;
`;
