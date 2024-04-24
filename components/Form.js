import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function InputForm() {
  const [name, setName] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleNumQuestionsChange = (text) => {
    setNumQuestions(text);
  };

  return (
    <View style={styles.container}>
      <Text>Enter Your Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Username"
      />
      <Text>Enter Number Of Quize:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNumQuestionsChange}
        value={numQuestions}
        placeholder="Number of Quize"
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
