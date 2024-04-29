import { StyleSheet, View,Text, Image,  } from "react-native";
import { Button } from "react-native-paper";


export default function HomeScreen ({navigation}) {
return (
    
    <View style={{ flex:1,alignItems:"center",justifyContent:"center", backgroundColor: '#d46de5'}}>
       
        <Image source = {require("./../assets/Image/logo-quizy.png")} style = {styles.homeImage}/>
        <Button  mode="contained" onPress={() => navigation.navigate('Quiz')}>
    
    QuizScreen
        
  </Button>
 
  <Text>home page</Text>
  
    </View>
    
);
}

const styles = StyleSheet.create({
  homeImage: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
