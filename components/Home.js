import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/Image/logo-quizy.png')}
        style={styles.homeImage}
      />
      <Button mode="contained" onPress={() => navigation.navigate('Quiz')}>
        Start Quiz
      </Button>
      <Text>Welcome to Quiz App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d46de5',
  },
  homeImage: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
