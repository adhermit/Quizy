import { StyleSheet, View, Image } from "react-native";


export default function HomeScreen ({navigation}) {
return (
    <View style={{ flex:1,alignItems:"center",justifyContent:"center", backgroundColor: '#d46de5'}}>
        <Image source = {require("./../assets/Image/logo-quizy.png")} style = {styles.homeImage}/>
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