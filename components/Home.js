import { StyleSheet, View, Image, Alert } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen () {
return (
    <View style={{ flex:1,alignItems:"center",justifyContent:"center", backgroundColor: '#d46de5'}}>
        <Image source = {require("./../assets/Image/logo-quizy.png")} style = {styles.homeImage}/>
        <Button icon="camera" mode="contained" onPress={() => alert('Pressed')}>
    Press me
  </Button>
    </View>
);
}
const styles = StyleSheet.create({
    homeImage: {
        "height": 200,
        resizeMode: 'contain',
        marginBottom: 20,
    }
});