import React from 'react';
import { 
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container} >
      <View >
        <Text > Coding Friday </Text>
        <TouchableOpacity>
          <Icon name="power" size={20} color="#0f4c75"/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Home;

