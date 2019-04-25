import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Spinner } from 'native-base';

import { getUser } from '../selectors/user';

export const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export class RedirectorLogic extends React.Component {
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
