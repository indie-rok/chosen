import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button>
            <Text>Connect with Facebook</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
