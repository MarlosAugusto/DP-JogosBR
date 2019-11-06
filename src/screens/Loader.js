import React from 'react';
import { ActivityIndicator } from "react-native";


import CenteredContainer from '../components/CenteredContainer';

export default function Loader() {
  return (
    <CenteredContainer>
      <ActivityIndicator size="large" />
    </CenteredContainer>
  );
}
