import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
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
`;
const Scroll = styled.ScrollView`
  width: 100%;
`;

export default function Home({ navigation }) {
  useEffect(() => {
    console.log('Home render')
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#959113" />
      <Header title="Home" navigation={navigation} />
      <Container centered>
        <DescContainer>
          <Desc>Jogos da Seleção Brasileira na Copa America 2019</Desc>
        </DescContainer>
        <Scroll>
          {
            JSON.parse(matchs).map((match, index) =>
              <MatchContainer key={index} match={match} navigation={navigation} />
            )
          }
        </Scroll>
      </Container>
    </>
  );
}
