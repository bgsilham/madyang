import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {connect} from 'react-redux'

import Login from './Login';
import Home from './Home';
import Detail from './Detail';

const Stack = createNativeStackNavigator();

class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth.dataLogin === '' ? (
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          ):(
            <>
              <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
              <Stack.Screen options={{headerShown: false}} name="Detail" component={Detail} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(Index) 

