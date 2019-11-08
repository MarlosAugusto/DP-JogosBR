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
import { Hoshi } from "react-native-textinput-effects";
import Button from "../components/Button";
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
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  async function cadastro() {
    if (!email || !password || !name) {
      await Alert.alert(
        "Erro",
        "Insera todos os campos para realizar o Cadastro."
      );
    } else {
      const res = SignUp(email, password, name);

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
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/logo.jpg")}
    >
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>AgroRetorno</Text>
        <Text style={styles.subtitle}>Cadastro</Text>
      </View>
      <View style={{ flex: 5, margin: 10 }}>
        <ScrollView onScrollBeginDrag={() => Keyboard.dismiss()}>
          <Form>
            <Hoshi
              label={"E-mail"}
              labelStyle={{ color: "#FFF" }}
              borderColor={"#FFF"}
              borderHeight={3}
              inputPadding={16}
              inputStyle={{ color: "#FFF" }}
              value={email}
              onChangeText={texto => changeEmail(texto)}
            />
            <Hoshi
              secureTextEntry
              label={"Senha"}
              labelStyle={{ color: "#FFF" }}
              borderColor={"#FFF"}
              borderHeight={3}
              inputPadding={16}
              inputStyle={{ color: "#FFF" }}
              value={password}
              onChangeText={senha => changePassword(senha)}
            />
            <Hoshi
              label={"Nome"}
              labelStyle={{ color: "#FFF" }}
              borderColor={"#FFF"}
              borderHeight={3}
              inputPadding={16}
              inputStyle={{ color: "#FFF" }}
              value={name}
              onChangeText={nome => changeName(nome)}
            />
            <TouchableOpacity
              style={{
                marginTop: 30,
                marginBottom: 10,
                alignItems: "center"
              }}
              onPress={() =>
                cadastro()
                  ? navigation.navigate("Home")
                  : navigation.navigate("Login")
              }
              disabled={!email || !password || !name}
            >
              <Button title="Cadastrar" color="#006B42" />
            </TouchableOpacity>
          </Form>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#000000CC',
  },
  subtitle: {
    fontSize: 40,
    color: '#000000CC',
  }
});
