import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PaperProvider} from 'react-native-paper';

import SettingsScreen from './components/Setting';
import HomeScreen from "./components/Home";
import CategoryScreen from "./components/Categories";
import ScoreScreen from './components/ScoreBoard';
import QuizScreen from './components/Quiz';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  
  return (
    <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen component ={TabsNavigator} name="Tabs" options= {{headerShown:false}}/>
  <Stack.Screen component ={QuizScreen} name="Quiz"/>
  <Stack.Screen component ={HomeScreen} name="Home"/>

  
    
   </Stack.Navigator>
  
        
      <StatusBar style="auto" />
      
     
    </NavigationContainer>
    </PaperProvider>
  );
}
const TabsNavigator =() => (
  <Tab.Navigator>
  <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
          <Tab.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Score Board"
            component={ScoreScreen}
            options={{
              tabBarLabel: 'Scoreboard',
              tabBarIcon: ({ color, size }) => (
                <Icon name="trophy" size={size} color={color} />
              ),
            }}
          />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
          }}
        />
       
      </Tab.Navigator> 
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
