import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { categoriesData } from "../Data/Category";
import { List } from "react-native-paper";

export default function CategoryScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
        <List.Section>
            {categoriesData.map((category) => (
            <List.Item title={category.name} key= {category.key} left={(props) => <List.Icon {...props} icon={category.icon} />} />
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
