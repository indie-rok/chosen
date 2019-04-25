import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../features/login/components';
import RedirectorLogic from './RedirectorLogic';

const ConnectFacebookStack = createSwitchNavigator({
  SignIn: {
    screen: LoginScreen,
  },
});

ConnectFacebookStack.navigationOptions = {
  header: null,
};

//   GetFacebookDetails: GetFacebookDetailsScreen,
//   AnswerPersonalQuestions: AnswerPersonalQuestionDetails,

// const MainAppStack = createStackNavigator({
//   //   AwaitingMeeting: AwaitingMeetingScreen,
//   //   ProfileSettings: ProfileSettingsScreen,
// });

// const NewMeetingStack = createStackNavigator({
//   //   AwaitingMeeting: AwaitingMeetingScreen,
//   //   ProfileSettings: ProfileSettingsScreen,
// });

const MainAppNavigator = createStackNavigator({
  RedirectorLogic: { screen: RedirectorLogic },
  ConnectFacebook: ConnectFacebookStack,
  //   MainApp: MainAppStack,
  //   NewMeeting: NewMeetingStack,
});

export default createAppContainer(MainAppNavigator);
