import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { categoriesData } from '../Data/Category';

export default function CategoryScreen() {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Categories</Text>
            {categoriesData.map((category, index) => (
                <View key={index}>
                    <Text>{category.name}</Text>
                </View>
            ))}
        </View>
    );
}
