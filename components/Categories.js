import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { categoriesData } from "../Data/Category";
import { List } from "react-native-paper";

export default function CategoryScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text>Categories</Text>
        <List.Section>
            {categoriesData.map((category, index) => (
            <List.Item title={category.name} left={(props) => <List.Icon {...props} icon={category.icon} />} />
            ))}
        </List.Section>
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
