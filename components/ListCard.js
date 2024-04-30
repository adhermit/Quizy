import React, { useState } from 'react';
import { RadioButton, Card, Title, Button, Text } from 'react-native-paper';
import { decode as base64Decode } from 'base-64';

const ListCard = ({ quiz, onNext, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = (answer) => {
    setShowResult(true);
    onAnswer(answer === base64Decode(quiz.correct_answer)); // Pass true/false to parent
  };

  const handleNext = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    onNext();
  };

  return (
    <Card>
      <Card.Content>
        <Title>{base64Decode(quiz.question)}</Title>
      </Card.Content>
      {quiz.answers.map((answer, index) => (
        <RadioButton.Item
          key={index}
          label={base64Decode(answer)}
          value={base64Decode(answer)}
          status={selectedAnswer === answer ? 'checked' : 'unchecked'}
          onPress={() => {
            setSelectedAnswer(answer);
            checkAnswer(answer);
          }}
          disabled={showResult}
        />
      ))}
      {showResult && (
        <Text style={{ color: quiz.correct_answer === selectedAnswer ? 'green' : 'red' }}>
          {quiz.correct_answer === selectedAnswer ? 'Correct Answer!' : `Wrong Answer! The correct answer is: ${base64Decode(quiz.correct_answer)}`}
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
