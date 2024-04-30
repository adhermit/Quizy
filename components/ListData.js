import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';

export default function ListCard({ data, currentQuestionIndex, onNextQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCorrectAnswer(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowCorrectAnswer(false);
    onNextQuestion();
  };

  if (!data || !data.results[currentQuestionIndex]) {
    return <Text>No quiz data available</Text>;
  }

  const currentQuestion = data.results[currentQuestionIndex];

  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.questionTitle}>Question {currentQuestionIndex + 1}</Text>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.type === 'multiple' && (
            <View>
              <Text style={styles.optionsTitle}>Options:</Text>
              {currentQuestion.incorrect_answers.map((option, i) => (
                <View key={i} style={styles.optionContainer}>
                  <RadioButton.Android
                    value={option}
                    status={selectedOption === option ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionSelect(option)}
                  />
                  <Text style={[styles.optionText, showCorrectAnswer && option === currentQuestion.correct_answer ? styles.correctOption : null]}>{option}</Text>
                </View>
              ))}
              <View key={currentQuestion.incorrect_answers.length} style={styles.optionContainer}>
                <RadioButton.Android
                  value={currentQuestion.correct_answer}
                  status={selectedOption === currentQuestion.correct_answer ? 'checked' : 'unchecked'}
                  onPress={() => handleOptionSelect(currentQuestion.correct_answer)}
                />
                <Text style={[styles.optionText, showCorrectAnswer && currentQuestion.correct_answer === selectedOption ? styles.correctOption : null]}>{currentQuestion.correct_answer}</Text>
              </View>
              {showCorrectAnswer && (
                <Text style={styles.correctAnswer}>Correct Answer: {currentQuestion.correct_answer}</Text>
              )}
            </View>
          )}
          {currentQuestion.type === 'boolean' && (
            <Text style={styles.booleanQuestion}>True or False</Text>
          )}
        </Card.Content>
      </Card>
      <Button title="Next Question" onPress={handleNextQuestion} />
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 5,
  },
  correctOption: {
    color: 'green',
  },
  correctAnswer: {
    marginLeft: 30,
    color: 'green',
    marginBottom: 5,
  },
  booleanQuestion: {
    marginTop: 5,
  },
});
