import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan latar merah dan tiga kotak */}
      <View style={styles.topSection}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Bagian tengah dengan logo dan teks */}
      <View style={styles.middleSection}>
        <View style={styles.logoContainer}>
          <Image source={require('./asset/logopng.png')} style={styles.logo} />
        </View>
      </View>

      {/* Bagian bawah dengan latar biru dan tiga kotak */}
      <View style={styles.bottomSection}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topSection: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingLeft: 20,
  },

  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
  },
  logo: {
    width: 400,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
});
