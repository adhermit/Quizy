
import { View, StyleSheet, ScrollView } from "react-native";
import { categoriesData } from "../Data/Category";
import { List, Card } from "react-native-paper";

export default function CategoryScreen({navigation}) {
  const handleCategoryPress=(categoryName)=>{
    navigation.navigate("Quiz",{category:categoryName });
  }
  return (
    <ScrollView>
        <View style={styles.container}>
         
            <List.Section>
                {categoriesData.map((category, index) => (
            <Card Key={categoriesData.id} style={{margin: 5, backgroundColor: '#fff'}} >
                <List.Item title={category.name} left={(props) => <List.Icon {...props} icon={category.icon} />}
                onPress={()=> handleCategoryPress(category.name)} 
                />
            </Card>
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
