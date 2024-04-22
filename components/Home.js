import { StyleSheet, View, Image } from "react-native";


export default function HomeScreen ({navigation}) {
return (
    <View style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
        <Image source = {require("./../assets/logo-quizy.png")} style = {styles.homeImage}/>
    </View>
);
}
const styles = StyleSheet.create({
    homeImage: {
        "height": 200,
        resizeMode: 'contain',
        marginBottom: 20
    }
});