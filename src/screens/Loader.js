import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ResultContainer } from '../components/ResultContainer';

export default function Loader({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#959113" />
      <Header title="Loader" />
      {/* <ResultContainer /> */}
    </Container>
  );
}
