// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AgendaScreen from './pages/AgendaScreen';
import CalendarList from './pages/CalendarList';
import CalendarScreen from './pages/CalendarScreen';
import CalendarYearView from './pages/CalendarYearView';
import AddCategory from './pages/AddCategory';
import ListView from './pages/ListView';
import ObjectView from './pages/ObjectView';
import AddObject from './pages/AddObject';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoadingComplete: false,
      loggedIn: false,
    }
  }
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = {"LoginPage"} screenOptions = {{headerShown: false}} >

          <Stack.Screen name = "LoginPage" component = {LoginPage}/>
          <Stack.Screen name = "SignupPage" component = {SignupPage}/>
          <Stack.Screen name = "CalendarList" component = {CalendarList}/>
          <Stack.Screen name = "CalendarScreen" component = {CalendarScreen}/>
          <Stack.Screen name = "CalendarYearView" component = {CalendarYearView}/>
          <Stack.Screen name = "AgendaScreen" component = {AgendaScreen}/>
          <Stack.Screen name = "AddCategory" component = {AddCategory}/>
          <Stack.Screen name = "AddObject" component = {AddObject}/>
          <Stack.Screen name = "ListView" component = {ListView}/>
          <Stack.Screen name = "ObjectView" component = {ObjectView}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}