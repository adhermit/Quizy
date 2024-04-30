import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SettingScreen({ onStart }) {
    const [username, setUsername] = useState('Noobe');
    const [numberQuestions, setNumQuestions] = useState('');
    const navigation = useNavigation();

    const handleSubmit = () => {
        if (numberQuestions.trim() && !isNaN(numberQuestions)) {
            onStart(username, parseInt(numberQuestions));
            navigation.navigate('Quiz');
        } else {
            alert('Please enter a valid number of questions.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ margin: 5 }}>Enter Your Username: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
                placeholder="Username"
                value={username}
            />
            <Text style={{ margin: 5 }}>Enter Number Of Quizzes: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setNumQuestions(text)}
                placeholder="Number of Quizzes"
                keyboardType="numeric"
                value={numberQuestions}
            />
            <Button title="Conform" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});
