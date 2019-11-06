import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import firebase from "@firebase/app";

import Routes from "./src";
// import Loader from "./src/screens/Loader";

const firebaseConfig = {
  apiKey: "AIzaSyBjelzl9vaGFa_5fqN9ZueuuYOq2fk20U8",
  authDomain: "dp-jogosbrasil.firebaseapp.com",
  databaseURL: "https://dp-jogosbrasil.firebaseio.com",
  projectId: "dp-jogosbrasil",
  storageBucket: "dp-jogosbrasil.appspot.com",
  messagingSenderId: "245592943685",
  appId: "1:245592943685:web:04bd4e9cecf3c08a87472c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => Routes);
