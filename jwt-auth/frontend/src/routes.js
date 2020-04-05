import React, { useEffect, useState } from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Home from './page/Home';
import Login from './page/Login';

function Routes() {

  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, []);
  
  async function getToken() {
    const token = await AsyncStorage.getItem('tokenId');
    setToken(token);  
  }

  async function Logout() { 
    await AsyncStorage.clear()
  }

  const BottomTab = createBottomTabNavigator();
  const StackNav = createStackNavigator();
  
  const AuthRoutes = () => (
    <>
      <BottomTab.Navigator
        initialRouteName="Login"  
      >
        <BottomTab.Screen name="Home" component={Home} />
      </BottomTab.Navigator>
    </>
  )

  return (
    <NavigationContainer>
      <StackNav.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={{
          title: 'Coding Friday',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#0f4c75' },
          headerTitleAlign: 'center',
  
        }}
      >
          <StackNav.Screen 
            name="Functions" 
            component={AuthRoutes} 
            options={ props => ({
              headerShown: true,
              headerRight:  () => (
                <TouchableOpacity 
                  style={{ marginRight: 5 }}
                  onPress={ async prop => {
                    await AsyncStorage.clear();
                    props.navigation.navigate('Login');
                  } }
                >
                  <Icon name="power" size={20} color="#FFF"/>
                </TouchableOpacity>
              )
            })}  
          />
          <StackNav.Screen  
            options={ props => ({
              headerShown: false,
            })}
            name="Login" component={Login} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Routes