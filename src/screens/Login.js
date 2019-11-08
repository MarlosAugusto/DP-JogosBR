import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
  ScrollView,
  Keyboard,
} from 'react-native';
import { BtnText, Button, ViewButtons } from '../components/Button';
import { Input, ViewInput } from '../components/Input';
import { Container } from '../components/Container';

// import { Hoshi } from 'react-native-textinput-effects';
import { SignIn } from '../services/FB';

// import styled from 'styled-components/native';

// const Form = styled.View`
//   background-color: #00000099;
//   border-radius: 6;
//   padding-top: 18;
//   padding-right: 10;
//   padding-bottom: 18;
//   padding-left: 10;
//   width: 100%;
// `;

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    if (!email || !password) {
      Alert.alert('Erro', 'Insera e-mail e senha para realizar o Login.');
      return false;
    } else {
      const res = await SignIn(email, password);
      // console.log('SignIn', res)
      if (typeof res === 'boolean') {
        setEmail('');
        setPassword('');
        return res;
      } else {
        let err = '';
        let message = '';
        res === 'auth/network-request-failed'
          ? ((err = 'Erro de conexão'),
            (message =
              'Verifique sua conexão com a internet e tente novamente.'))
          : ((err = 'Credenciais incorretas'),
            (message =
              'Verifique o email e senha inseridos e tente novamente.'));
        Alert.alert(err, message);
        return false;
      }
      // auth/wrong-password
      // auth/user-not-found
      // auth/network-request-failed
    }
  }
  return (
    <Container centered>
      <ViewInput>
        <Input
          placeholder='Email'
          value={email}
          onChangeText={texto => setEmail(texto)}>
        </Input>
        <Input
          placeholder='Password'
          value={password}
          onChangeText={senha => setPassword(senha)}
          secureTextEntry={true} >
        </Input>
      </ViewInput>
      <ViewButtons>
        <TouchableOpacity onPress={async () => {
          (await login()) === true &&
            navigation.navigate('Home');
        }}>
          <Button>
            <BtnText>Login</BtnText>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Button>
            <BtnText>Cadastro</BtnText>
          </Button>
        </TouchableOpacity>
      </ViewButtons>
    </Container>
  )
}
