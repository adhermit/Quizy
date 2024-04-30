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
    const currentQuestion = quiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;
    if (isCorrect){
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === quiz.length - 1){
      setQuizFinished(true);
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