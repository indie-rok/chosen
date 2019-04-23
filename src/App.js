import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import AppContainer from './navigation';
// import OneSignal from 'react-native-onesignal';

export default class App extends Component {
  componentDidMount() {
    console.log('sd');
  }
  // constructor() {
  //   super();
  //   OneSignal.init('752c15da-c6eb-4f65-9c33-35c7de98d05e');

  //   OneSignal.addEventListener('received', this.onReceived);
  //   OneSignal.addEventListener('opened', this.onOpened);
  //   OneSignal.addEventListener('ids', this.onIds);
  // }

  // componentWillUnmount() {
  //   OneSignal.removeEventListener('received', this.onReceived);
  //   OneSignal.removeEventListener('opened', this.onOpened);
  //   OneSignal.removeEventListener('ids', this.onIds);
  // }

  // onReceived(notification) {
  //   console.log('Notification received: ', notification);
  // }

  // onOpened(openResult) {
  //   console.log('Message: ', openResult.notification.payload.body);
  //   console.log('Data: ', openResult.notification.payload.additionalData);
  //   console.log('isActive: ', openResult.notification.isAppInFocus);
  //   console.log('openResult: ', openResult);
  // }

  // onIds(device) {
  //   console.log('Device info: ', device);
  // }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
