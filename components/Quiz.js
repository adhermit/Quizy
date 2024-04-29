import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function quizScreen({navigation}) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

