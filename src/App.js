import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import OneSignal from 'react-native-onesignal';

export default class App extends Component {
  // Calling the following function will open the FB login dialogue:
  static async facebookLogin() {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        // handle this however suites the flow of your app
        throw new Error('User cancelled request');
      }

      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

      // get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // handle this however suites the flow of your app
        throw new Error('Something went wrong obtaining the users access token');
      }

      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  }

  constructor() {
    super();
    this.state = { test: `` };
    OneSignal.init('752c15da-c6eb-4f65-9c33-35c7de98d05e');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    console.log(`here`);
    firebase
      .firestore()
      .collection('users')
      .doc('oneid')
      .get()
      .then((snapshot) => {
        this.setState({ test: snapshot.data().email });
      });
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <View>
        <Button title="Login" onPress={App.facebookLogin} />
        <Text>{this.state.test}</Text>
        <Text>xd6</Text>
      </View>
    );
  }
}
