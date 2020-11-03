import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//pages
import CalendarYearView from './pages/CalendarYearView';


export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }
  }

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{
          headerShown: false
        }}>
          <Stack.Screen name = "CalendarYearView" component = {CalendarYearView}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}