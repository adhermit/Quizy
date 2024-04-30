import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';

const ListCard = ({ data, currentQuestionIndex, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    onNextQuestion();
    setSelectedOption(null);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.questionTitle}>Question {currentQuestionIndex + 1}</Text>
          <Text style={styles.question}>{data.results[currentQuestionIndex].question}</Text>
          {data.results[currentQuestionIndex].type === 'multiple' && (
            <View>
              <Text style={styles.optionsTitle}>Options:</Text>
              {data.results[currentQuestionIndex].incorrect_answers.map((option, i) => (
                <View key={i} style={styles.optionContainer}>
                  <RadioButton.Android
                    value={option}
                    status={selectedOption === option ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionSelect(option)}
                  />
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              ))}
              <Button title="Next Question" onPress={handleNextQuestion} />
            </View>
          )}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    marginBottom: 10,
  },
  optionsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionText: {
    marginLeft: 10,
  },
});

export default ListCard;
