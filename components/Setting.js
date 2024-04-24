import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SettingScreen() {
    const [formData, setFormData] = useState({ name: '', numQuestions: '' });

    const handleChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        alert('Name: ' + formData.name);
        alert('Number of Quizzes: ' + formData.numQuestions);
    };

    return (
        <View style={styles.container}>
            <Text style={{margin: 5}}>Enter Your Username: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('name', text)}
                value={formData.name}
                placeholder="Username"
            />
            <Text style={{margin: 5}}>Enter Number Of Quizzes: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => handleChange('numQuestions', text)}
                value={formData.numQuestions}
                placeholder="Number of Quizzes"
                keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleSubmit} />
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
