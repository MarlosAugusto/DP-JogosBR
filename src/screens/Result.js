import React from 'react';
import { Container } from '../components/Container';
import { StatusBar } from 'react-native';
import { Header } from '../components/Header';
import { ResultContainer } from '../components/ResultContainer';

export default function Result({ navigation }) {
  const team1 = navigation.getParam("team1");
  const team2 = navigation.getParam("team2");

  return (
    <Container>
      <StatusBar backgroundColor="#959113" />
      <Header title="Resultado" navigation={navigation} />
      <ResultContainer team1={team1} team2={team2} />
    </Container>
  );
}
