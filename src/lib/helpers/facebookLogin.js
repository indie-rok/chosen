import { Alert } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import { put, takeEvery } from 'redux-saga/effects';

export default function facebookLogin() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        return Alert.alert('No account was created');
      }

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // handle this however suites the flow of your app
        Alert.alert('Error while connecting with facebook');
        reject(new Error('Something went wrong obtaining the users access token'));
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      resolve({ facebookToken: data.accessToken, ...firebaseUserCredential.user.toJSON() });
    } catch (e) {
      reject(new Error(`Error while getting facebook access token ${e}`));
    }
  });
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
