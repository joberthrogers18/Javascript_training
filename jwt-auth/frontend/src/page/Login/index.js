import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import Logo from '../../../assets/Logo.png';

function Login () {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}

export default Login;
