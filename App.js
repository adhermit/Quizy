import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from "./components/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{ tabBarLabel: 'Home', tabBarIcon: ({color, size}) => {
          return <Icon name='home' size={size} color={color}/>;
          },
        }}
        />
      </Tab.Navigator>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
