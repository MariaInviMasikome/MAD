import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Konten Tengah */}
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./asset/images.png')} // Pastikan path dan nama file benar
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Pustaka Ku</Text>
      </View>

      {/* Navigasi Bawah */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => console.log('Back')}>
          <Text style={styles.navIcon}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Center')}>
          <Text style={styles.navIcon}>{'◉'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Next')}>
          <Text style={styles.navIcon}>{'>'}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 90,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
  },
  navIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
