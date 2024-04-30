import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card, RadioButton } from 'react-native-paper';

export default function QuizScreen() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
      setIsLoading(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowCorrectAnswer(true);
    if (option !== data.results[currentQuestionIndex].correct_answer) {
      setIsWrongAnswer(true);
    } else {
      setIsWrongAnswer(false);
      setMarks(marks + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
    setIsWrongAnswer(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : data ? (
        <View>
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
                      <Text style={[styles.optionText, isWrongAnswer && option === selectedOption ? styles.wrongOption : null]}>{option}</Text>
                    </View>
                  ))}
                  <View style={styles.optionContainer}>
                    <RadioButton.Android
                      value={data.results[currentQuestionIndex].correct_answer}
                      status={selectedOption === data.results[currentQuestionIndex].correct_answer ? 'checked' : 'unchecked'}
                      onPress={() => handleOptionSelect(data.results[currentQuestionIndex].correct_answer)}
                    />
                    <Text style={[styles.optionText, isWrongAnswer && data.results[currentQuestionIndex].correct_answer === selectedOption ? styles.wrongOption : null]}>{data.results[currentQuestionIndex].correct_answer}</Text>
                  </View>
                  {showCorrectAnswer && (
                    <Text style={styles.correctAnswer}>Correct Answer: {data.results[currentQuestionIndex].correct_answer}</Text>
                  )}
                </View>
              )}
              {data.results[currentQuestionIndex].type === 'boolean' && (
                <Text style={styles.booleanQuestion}>True or False: {data.results[currentQuestionIndex].correct_answer}</Text>
              )}
            </Card.Content>
          </Card>
          {currentQuestionIndex < data.results.length - 1 ? (
            <Button title="Next Question" onPress={handleNextQuestion} />
          ) : (
            <Text>Quiz Finished! Your score: {marks} out of {data.results.length}</Text>
          )}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 5,
  },
  wrongOption: {
    color: 'red',
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