import * as React from 'react';
import {  RadioButton, Card, Text, Title , Button} from 'react-native-paper';
import { useState, useEffect } from "react";
import {decode as atob, encode as btoa} from 'base-64';



const ListCard= ({quiz, onNext}) => {

  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [shuffledAnswers, setShuffledAnswers] = React.useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const shuffleAnswers = (answers) => {
    const shuffled = [...answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (quiz) {
      // Combine correct and incorrect answers and shuffle them
      const answers = [...quiz.incorrect_answers, quiz.correct_answer];
      const shuffled = shuffleAnswers(answers);
      setShuffledAnswers(shuffled);
    }
  }, [quiz]);

  const checkAnswer = (answer) => {
    setShowResult(true);
    if (answer === quiz.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setCorrectAnswer(quiz.correct_answer);
    }
  };

  const handleNext = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    setCorrectAnswer('');
    onNext();
  };

  return (
    <Card>
      <Card.Content>
        <Title> {atob(quiz.question)}</Title>
      </Card.Content>
      {shuffledAnswers.map((answer, index) => (
        <RadioButton.Item
          key={index}
          label={atob(answer)}
          value={atob(answer)}
          status={selectedAnswer === answer ? 'checked' : 'unchecked'}

     onPress={() => {
            setSelectedAnswer(answer);
            checkAnswer(answer); // Directly check the answer when the user selects it
          }}
          disabled={showResult}
        />
      ))}
      {showResult && (
     <Text style={{ color: isCorrect ? 'green' : 'red' }}>
     {isCorrect ? 'Correct Answer!' : `Wrong Answer! The correct answer is: ${atob(correctAnswer)}`}
   </Text>
      )}
      {showResult && (
        <Button onPress={handleNext} mode="contained" style={{ margin: 10 }}>
          Next Question
        </Button>
      )}
    </Card>
  );

};

export default ListCard;
