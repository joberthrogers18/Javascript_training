import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity,
  AsyncStorage 
} from 'react-native';

import styles from './styles';
import Logo from '../../../assets/logo.png';
import api from '../../service/api';

function Login () {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {

    const data = {
      email,
      password
    }

    console.log(data);

    const response = await api.post('/signin', data);
    console.log(response.data.token);
    await AsyncStorage.setItem('tokeId', response.data.token);
    navigation.navigate('Functions');
  }

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
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput 
          textContentType="password" 
          style={styles.input} 
          placeholder="Digite sua senha"
          placeholderTextColor="#FFF"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
