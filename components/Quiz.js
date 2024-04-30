import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Button } from 'react-native';
import ListCard from './ListCard';

const QuizScreen = () => {
  const [quiz, setQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=50');
      const result = await response.json();
      setQuiz(result.results);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === quiz.length - 1) {
      setQuizFinished(true);
    }
  };

  const handleQuizFinish = () => {
    console.log('Total Score:', score);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (quizFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>Your Score: {score}/{quiz.length}</Text>
        <Button title="Finish" onPress={handleQuizFinish} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {quiz.length > 0 && quiz[currentQuestionIndex] && (
        <ListCard
          quiz={quiz[currentQuestionIndex]}
          onNext={handleNext}
          onAnswer={handleAnswer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default QuizScreen;