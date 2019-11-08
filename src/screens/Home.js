import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, ScrollView } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { MatchContainer } from '../components/MatchContainer';

import matchs from '../assets/jogos';

const DescContainer = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;
const Desc = styled.Text`
  width: 80%;
  font-size: 18px;
  text-align: center;
  color: #353535;
  /* margin-top: 5px; */
`;
export default function Home({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#959113" />
      <Header title="Home" navigation={navigation} />
      <DescContainer>
        <Desc>Jogos da Seleção Brasileira na Copa America 2019</Desc>
      </DescContainer>
      <ScrollView>
        {
          JSON.parse(matchs).map((match, index) => 
            <MatchContainer key={index} match={match} navigation={navigation} />
          )
        }
      </ScrollView>
    </Container>
  );
}
