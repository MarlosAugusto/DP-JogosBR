import React, {useState} from 'react';
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
import Button from '../components/Button';

import {Hoshi} from 'react-native-textinput-effects';
import {SignIn} from '../services/FB';

import styled from 'styled-components/native';

const Form = styled.View`
  background-color: #00000099;
  border-radius: 6;
  padding-top: 18;
  padding-right: 10;
  padding-bottom: 18;
  padding-left: 10;
  width: 100%;
`;

export default function Login({navigation}) {
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
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/logo.jpg')}>
      <View style={{flex: 1, backgroundColor: '#0000001a'}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>Jogos do Brasil</Text>
          <Text style={styles.subtitle}>Login</Text>
        </View>
        <View style={{flex: 5, margin: 10}}>
          <ScrollView onScrollBeginDrag={() => Keyboard.dismiss()}>
            <Form>
              <Hoshi
                label={'E-mail'}
                labelStyle={{color: '#FFF'}}
                borderColor={'#FFF'}
                borderHeight={3}
                inputPadding={16}
                inputStyle={{color: '#FFF'}}
                value={email}
                onChangeText={texto => setEmail(texto)}
              />
              <Hoshi
                secureTextEntry
                label={'Senha'}
                labelStyle={{color: '#FFF'}}
                borderColor={'#FFF'}
                borderHeight={3}
                inputPadding={16}
                inputStyle={{color: '#FFF'}}
                value={password}
                onChangeText={senha => setPassword(senha)}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.cadastrar}>
                  Ainda não tem cadastro? Cadastre-se
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  marginBottom: 10,
                  alignItems: 'center'
                }}
                onPress={async () => {
                  (await login()) === true && 
                  navigation.navigate('Home');
                }}>
                <Button title="Acessar" color="#006B42" />
              </TouchableOpacity>
            </Form>
          </ScrollView>
        </View>
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
  },
  input: {
    fontSize: 20,
    height: 45,
    borderBottomColor: '#05917c',
    borderBottomWidth: 2,
  },
  cadastrar: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
  },
});
