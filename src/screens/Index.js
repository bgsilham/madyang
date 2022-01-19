import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';
import Detail from './Detail';

const Stack = createNativeStackNavigator();

export default class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="Detail" component={Detail} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

