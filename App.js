import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import SettingsScreen from './components/Setting';
import HomeScreen from './components/Home';
import CategoryScreen from './components/Categories';
import ScoreScreen from './components/ScoreBoard';
import QuizScreen from './components/Quiz';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [username, setUsername] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);

  const handleStartQuiz = (name, num) => {
    setUsername(name);
    setNumQuestions(num);
    navigation.navigate('Quiz', {username: name, nukmQuestions: num});
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Settings">
            {(props) => <SettingScreen {...props} onStart={handleStartQuiz} />}
          </Stack.Screen>
          <Stack.Screen name="Quiz" component={QuizScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}

const TabsNavigator = () => (
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
      name="ScoreBoard"
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