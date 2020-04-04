import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './page/Home';
import Login from './page/Login';

function Routes() {
  
  const BottomTab = createBottomTabNavigator();
  const StackNav = createStackNavigator();
  
  const AuthRoutes = () => {
    <>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={Home} />
      </BottomTab.Navigator>
    </>
  }

  return (
    <NavigationContainer>
      <StackNav.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <StackNav.Screen name="Login" component={Login} />
        <StackNav.Screen name="Functions" component={AuthRoutes} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Routes