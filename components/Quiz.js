import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import ListCard from "./ListCard"

export default function QuizScreen() {
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
      const response = await fetch("https://opentdb.com/api.php?amount=10&encode=base64");
      const result = await response.json();
      setQuiz(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    const currentQuestion = quiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (isCorrect){
      setScore(score + 1);
    }
    if (currentQuestionIndex === quiz.length - 1){
      setQuizFinished(true);
    }
  };

  const handleQuizFinish = () => {
    console.log("total Score:", score);
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect){
      setScore(score + 1);
    }
    if (currentQuestionIndex === quiz.length - 1){
      setQuizFinished(true);
    }
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

  if (quizFinished){
    return (
      <View style = {styles.container}>
        <Text style = {styles.scoreText}>Your Score: {score}/{quiz.length}</Text>
        <Button title="Finish" onPress ={handleQuizFinish}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {quiz.length > 0 && quiz[currentQuestionIndex] && (
        <ListCard
          quiz={quiz[currentQuestionIndex]}
          onNext={handleNext}
          onAnswer = {handleAnswer}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});