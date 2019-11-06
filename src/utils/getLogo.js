import React from 'react';
import styled from 'styled-components/native';

const TeamLogo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const getLogo = (teamName) => {
  switch (teamName) {
    case 'Argentina':
      return <TeamLogo source={require('../assets/images/Argentina.png')} />;
    case 'Bolívia':
      return <TeamLogo source={require('../assets/images/Bolivia.png')} />;
    case 'Brasil':
      return <TeamLogo source={require('../assets/images/Brasil.png')} />;
    case 'Paraguai':
      return <TeamLogo source={require('../assets/images/Paraguai.png')} />;
    case 'Peru':
      return <TeamLogo source={require('../assets/images/Peru.png')} />;
    case 'Venezuela':
      return <TeamLogo source={require('../assets/images/Venezuela.png')} />;
  
    default:
      break;
  }
}