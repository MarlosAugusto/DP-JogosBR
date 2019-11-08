import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SignOut } from '../services/FB';

const HD = styled.View`
  width: 100%;
  height: 50px;
  background-color: #f8f220;
  flex-direction: row;
  align-items: center;
  border-color: #bdbdb5;
  border-bottom-width: 2px;
`;
const BackButtonContainer = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.Text`
  margin-left: ${props => (props.navigation ? '15px' : '0px')};
  text-align: ${props => (props.navigation && !props.home ? 'left' : 'center')};
  width: ${props => (props.navigation && !props.home ? '75%' : '100%')};
  color: #25df22;
  font-size: 18px;
  font-weight: bold;
`;
const LogoutContainer = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 20px;
  width: 20%;
  z-index: 1;
`;
const Logout = styled.Text`
  text-align: right;
  color: #25df22;
  font-size: 18px;
`;

export const Header = ({title, navigation}) => {
  console.log('title', title)  
  function logout() {
    SignOut();
    navigation.navigate('Login');
    return false
  }

  return (
    <HD>
      {navigation && title !== 'Home' && (
        <BackButtonContainer onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#25DF22" />
        </BackButtonContainer>
      )}
      <TitleContainer
        navigation={navigation ? true : false}
        home={title === 'Home' ? true : false}>
        {title}
      </TitleContainer>
      {title === 'Home' && (
        <LogoutContainer onPress={() => logout()}>
          <Logout>Sair</Logout>
        </LogoutContainer>
      )}
    </HD>
  );
};
