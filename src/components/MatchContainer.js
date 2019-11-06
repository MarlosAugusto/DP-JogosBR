import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { getLogo } from '../utils/getLogo';

const MC = styled.View`
  width: 97%;
  height: 120px;
  margin-bottom: 15px;
  margin-left: 1.5%;
  margin-right: 1.5%;
  background-color: #FFF;
  border-color: #0303FE;
  border-width: 2px;
  border-radius: 5px;
  justify-content: center;
`;
const DescContainer = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const TitleContainer = styled.View`
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 20px;
`;
const TeamsContainer = styled.View`
  width: 80%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TeamContainer = styled.View`
  width: 45%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TeamName = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #353535;
  /* margin-top: 5px; */
`;
const VS = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const StatusContainer = styled.View`
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
`;
const Status = styled.Text`
  text-align: center;
  font-size: 16px;
`;
export const MatchContainer = ({ match, navigation }) => {
  const { title, status, teams } = match;
  const { team1, team2 } = teams;
  return (
    <MC>
      <DescContainer onPress={() => navigation.navigate('Result', { team1, team2 })}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <TeamsContainer>
          <TeamContainer>
            {getLogo(team1.name)}
            <TeamName>{team1.name}</TeamName>
          </TeamContainer>
          <VS>
            <Icon name="close" size={22} color="#7C7C7C" />
          </VS>
          <TeamContainer>
            <TeamName>{team2.name}</TeamName>
            {getLogo(team2.name)}
          </TeamContainer>
        </TeamsContainer>
        <StatusContainer>
          <Status>Jogo {status}</Status>
        </StatusContainer>
      </DescContainer>
    </MC>
  )
}

