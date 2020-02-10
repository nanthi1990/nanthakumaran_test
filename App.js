/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer,createStackNavigator} from "react-navigation-stack";
import SignIn from './Components/SignIn';

const AppNavigator = createStackNavigator({
  SignIn:SignIn,
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContainer />
      </React.Fragment>
    );
  }
}
