import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Input from './components/Input';
import Button from './components/Button/Button';

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>selamat datang</Text>
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign In" />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
