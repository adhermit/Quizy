import {View, Text} from 'react-native';
import {questionsData} from 'Questions';

export default function CategoryScreen() {
    return (
        <View style={{ flex:1, alignItems: 'center', JustifyContent:'center'}}>
            <Text>Categories</Text>
            {questionsData}
        </View>
    );
}

