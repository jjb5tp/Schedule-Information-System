// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//pages
// import CalendarYearView from './pages/CalendarYearView';
// import LoginPage from './pages/LoginPage';
import ListOfItems from './pages/ListView';

//import firebase from './firebase';

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
        {/* <Stack.Screen name = "CalendarYearView" component = {CalendarYearView}/>
        <Stack.Screen name = "LoginPage" component = {LoginPage}/> */}
        <Stack.Screen name = "ListView" component = {ListOfItems}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}