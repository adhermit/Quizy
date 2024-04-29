import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function HomeScreen({navigation}) {

  const goToQuizScreen = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d46de5' }}>
      <Image source={require('./../assets/Image/logo-quizy.png')} style={styles.homeImage} />
      <Button title='Press me' onPress={goToQuizScreen}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  homeImage: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
