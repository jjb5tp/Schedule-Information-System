import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//pages
import AgendaScreen from './pages/AgendaScreen';
import CalendarList from './pages/CalendarList';
import CalendarScreen from './pages/CalendarScreen';
import CalendarYearView from './pages/CalendarYearView';
import CalendarYearViewBackup from './pages/CalendarYearViewBackup';
import ExpandableCalendarScreen from './pages/ExpandableCalendarScreen';
import TimelineCalendarScreen from './pages/TimelineCalendarScreen';
import LoginPage from './pages/LoginPage';

import ApiKeys from './components/ApiKeys';
import * as firebase from 'firebase';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoadingComplete: false,
    }

    // Initalize firebase...
    if (!firebase.apps.length){ // checks if it has alread been initialized
      firebase.initializeApp(ApiKeys.firebaseConfig);
    }
  }
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{
          headerShown: false
        }}>
        <Stack.Screen name = "AgendaScreen" component = {AgendaScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}