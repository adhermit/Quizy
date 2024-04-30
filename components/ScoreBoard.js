import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ScoreScreen() {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        loadScores();
    }, []);

    const loadScores = () => {
        const storedScores = [
            { id: 1, playerName: 'Player 1', score: 100 },
            { id: 2, playerName: 'Player 2', score: 150 },
            { id: 3, playerName: 'Player 3', score: 200 },
        ];
        setScores(storedScores);
    };

    const renderItem = ({ item }) => (
        <View style={styles.scoreItem}>
            <Text>{item.playerName}</Text>
            <Text>{item.score}</Text>
        </View>
    );

    const title = 'Quiz Scores';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={scores}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scoreItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
});
