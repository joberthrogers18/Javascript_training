import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import Logo from '../../../assets/logo.png';

function Login () {
  return (
    <View style={styles.container}>
      <Image source={Logo} />

      <View style={styles.inputsContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput 
          textContentType="emailAddress" 
          style={styles.input} 
          placeholder="Digite seu email aqui"
          placeholderTextColor="#FFF"
          />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput 
          textContentType="password" 
          style={styles.input} 
          placeholder="Digite sua senha"
          placeholderTextColor="#FFF"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
