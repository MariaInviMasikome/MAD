// 1. Import core components from react-native
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

// 2. Create the component
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>My Profile</Text>
        </View>

        <Image
          style={styles.profileImage}
          source={require('./asset/png.jpeg')}
        />
        <Text style={styles.name}>Maria invi Masikome</Text>
        <Text style={styles.birthDate}>Date of Birth: 10 Maret, 2003</Text>
        <Text style={styles.university}>Universitas: Unklab</Text>
        <Text style={styles.major}>Jurusan: Sistem Informasi</Text>
        <Text style={styles.motivation}>
          "Success is not the key to happiness. Happiness is the key to
          success."
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// 3. Export the component
export default App;

// 4. Styling
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  profileImage: {
    height: 300,
    width: 300,
    borderRadius: 80,
    alignSelf: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  birthDate: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 1,
    color: 'gray',
  },
  university: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 5,
    color: 'darkblue',
  },
  major: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 1,
    color: 'darkgreen',
  },

  motivation: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    color: 'blue',
  },
});
