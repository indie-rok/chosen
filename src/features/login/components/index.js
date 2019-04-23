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
    this.loginFacebook = this.loginFacebook.bind(this);
  }

  async loginFacebook() {
    const res = await facebookLogin();
    this.props.login(res);
  }

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.loginFacebook}>
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
