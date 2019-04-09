import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase';

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

  render() {
    return (
      <View>
        <Text>{this.state.test}</Text>
        <Text>xd5</Text>
      </View>
    );
  }
}
