/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { BtnText, Button, ViewButtons } from '../components/Button';
import { Input, ViewInput } from '../components/Input';
import { Container } from '../components/Container';
import { SignUp, SignIn } from "../services/FB";

import styled from "styled-components/native";

const Form = styled.View`
  background-color: #00000099;
  border-radius: 6;
  padding-top: 18;
  padding-right: 10;
  padding-bottom: 18;
  padding-left: 10;
  width: 100%;
`;

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function cadastro() {
    if (!email || !password) {
      await Alert.alert(
        "Erro",
        "Insera todos os campos para realizar o Cadastro."
      );
    } else {
      const res = SignUp(email, password);

      const resLogin = res && SignIn(email, password);
      await Alert.alert(
        res && resLogin ? "Sucesso" : "Erro",
        res
          ? resLogin
            ? "Seu cadastro foi realizado com sucesso, seu primeiro login é realizado automaticamente."
            : "Seu cadastro foi realizado com sucesso, mas houve um erro ao logar, tente novamente."
          : "Houve algum erro, e seu cadastro não foi realizado."
      );
      return resLogin;
    }
    return false;
  }

  return (
    <ImageBackground style={{ flex: 1 }}
      source={require('../assets/images/logo.jpg')}>
      <Container centered bg>
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Button>
              <BtnText>Voltar</BtnText>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => cadastro() === true
            && navigation.navigate("Home")
            // : navigation.navigate("Login")
          }>
            <Button>
              <BtnText>Cadastrar-se</BtnText>
            </Button>
          </TouchableOpacity>
        </ViewButtons>
      </Container>
    </ImageBackground>
  );
}
