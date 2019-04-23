import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>xd2{Date.now()}</Text>
      </View>
    );
  }
}
