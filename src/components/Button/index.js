import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Alert } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View
        testID="bananaFresh"
        onPress={() => {
          Alert.alert('here');
        }}
      >
        <Text> textInComponent </Text>
      </View>
    );
  }
}
