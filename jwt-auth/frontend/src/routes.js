import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

import Home from './page/Home';
import Login from './page/Login';

function Routes() {

  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, [token]);
  
  async function getToken() {
    const token = await AsyncStorage.getItem('tokeId');
    setToken(token);  
  }

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
        { token ? (
          <StackNav.Screen name="Functions" component={Home} />
        ) : ( 
          <StackNav.Screen name="Login" component={Login} />
        )
        }
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Routes