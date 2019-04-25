import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import facebookLogin from '../../../lib/helpers/facebookLogin';
import login from '../actions';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login,
    },
    dispatch,
  );

class Login extends Component {
  constructor(props) {
    super(props);
    this.connectWithFacebook = this.connectWithFacebook.bind(this);
  }

  async connectWithFacebook() {
    const facebookData = await facebookLogin();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.login(facebookData);
    // eslint-disable-next-line react/destructuring-assignment
    this.props.navigation.navigate('RedirectorLogic');
  }

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.connectWithFacebook}>
            <Text>Connect with Facebook</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Login);
