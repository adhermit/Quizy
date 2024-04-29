import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SettingScreen() {
    const navigation = useNavigation();

    const [formData, setFormData] = useState({ name: '', numQuestions: '' });
    
    const handleSubmit = () => {
        console.log("Player Name:", formData.name);
        navigation.navigate('ScoreScreen', {formData: formData.name});
    };

    const handleChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
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
