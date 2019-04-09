import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
export default class App extends Component {
  constructor() {
    super();
    this.state = { test: `` };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .doc('oneid')
      .get()
      .then((snapshot) => {
        this.setState({ test: snapshot.data().email });
      });
  }

  // Calling the following function will open the FB login dialogue:
  async facebookLogin() {
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

  render() {
    return (
      <View>
        <Button title="Login" onPress={this.facebookLogin} />
        <Text>{this.state.test}</Text>
        <Text>xd5</Text>
      </View>
    );
  }
}
