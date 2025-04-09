import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import CustomTextInput from '../components/Input/CustomTextInput';
import CustomButton from '../components/Input/button/CustomButton';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />

      <CustomTextInput placeholder="Masukkan Nama" value={name} onChangeText={setName} />
      <CustomTextInput placeholder="Masukkan Username" value={username} onChangeText={setUsername} />
      <CustomTextInput placeholder="Masukkan Email" value={email} onChangeText={setEmail} />
      <CustomTextInput placeholder="Masukkan Alamat" value={address} onChangeText={setAddress} />
      <CustomTextInput 
        placeholder="Masukkan Nomor Telepon" 
        value={phoneNumber} 
        onChangeText={setPhoneNumber} 
        keyboardType="numeric"
      />

<CustomButton title="Register" onPress={handleRegister} style={{ backgroundColor: 'green' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationScreen;