import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { connect } from 'react-redux';

import { getUser } from '../selectors/user';

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

class RedirectorLogic extends Component {
  componentDidMount() {
    const { navigation, user } = this.props;
    if (user) {
      Alert.alert('Welcome user');
      navigation.replace('ConnectFacebook');
    } else {
      navigation.replace('ConnectFacebook');
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(RedirectorLogic);
