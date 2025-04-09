import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder}) => {
const Input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};