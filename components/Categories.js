import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { categoriesData } from './Data/Category';

export default function CategoryScreen() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoriesData);
    }, []);

    const fetchData = () => {
        setCategories(categoriesData);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Categories</Text>
            {categories.map((category, index) => (
                <View key={index}>
                    <Text>{category.name}</Text>
                </View>
            ))}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {categories.length > 0 ? (
                    <View>
                        <Text>Data loaded successfully:</Text>
                        <Text>{JSON.stringify(categories)}</Text>
                    </View>
                ) : (
                    <Text>Loading data...</Text>
                )}
                <Button title="Refresh Data" onPress={fetchData} />
            </View>
        </View>
    );
}
