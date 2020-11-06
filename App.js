// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
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
import AddCategory from './pages/AddCategory';
import ListOfItems from './pages/ListView';


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
        <Stack.Navigator screenOptions = {{
          headerShown: false
        }}>


          <Stack.Screen name = "LoginPage" component = {LoginPage}/>
          <Stack.Screen name = "CalendarList" component = {CalendarList}/>
          <Stack.Screen name = "CalendarScreen" component = {CalendarScreen}/>
          <Stack.Screen name = "AgendaScreen" component = {AgendaScreen}/>
          <Stack.Screen name = "AddCategory" component = {AddCategory}/>
          <Stack.Screen name = "ListView" component = {ListOfItems}/>
          
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}