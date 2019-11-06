import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { getLogo } from '../utils/getLogo';

const RC = styled.View`
  width: 97%;
  height: 250px;
  margin-top: 10px;
  margin-left: 1.5%;
  margin-right: 1.5%;
  background-color: #FFF;
  border-color: #0303FE;
  border-width: 2px;
  border-radius: 5px;
  justify-content: center;
`;
const TeamsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-left: 15%;
  padding-right: 15%;
`;
const TeamContainer = styled.View`
  width: 35%;
  height: 100%;
  align-items: center;
`;
const TeamName = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #353535;
  margin-top: 5px;
`;
const TeamGol = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #000;
  margin-top: 12px;
`;
const VS = styled.View`
  height: 100%;
  justify-content: flex-end;
`;

export const ResultContainer = ({team1, team2}) => {
  return (
    <RC>
      <TeamsContainer>
        <TeamContainer>
          {getLogo(team1.name)}
          <TeamName>{team1.name}</TeamName>
          <TeamGol>{team1.gols}</TeamGol>
        </TeamContainer>
        <VS>
          <Icon name="close" size={22} color="#7C7C7C" />
        </VS>
        <TeamContainer>
          {getLogo(team2.name)}
          <TeamName>{team2.name}</TeamName>
          <TeamGol>{team2.gols}</TeamGol>
        </TeamContainer>
      </TeamsContainer>
    </RC>
  )
}

