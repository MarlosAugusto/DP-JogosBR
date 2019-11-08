import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import AsyncStorage from "@react-native-community/async-storage";

export const SignIn = async (email, password) => {
  let success = false;
  let error = null;
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => (success = true))
    .catch(err => (error = err.code));

  if (error) {
    return error;
  }

  return success;
};

export const SignOut = async () => {
  let success = false;
  await firebase.auth().signOut()
  .then(() => {
    success = true;
  });

return success;
  
};

export const SignUp = async (email, password, name) => {
  let success = false;
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      success = true;
    });

  return success;
};