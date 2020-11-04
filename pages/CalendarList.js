import React, { Component } from 'react';

//react-native components
import {StyleSheet, ImageBackground, View } from 'react-native';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {Button, Container, Content } from 'native-base';

//online components
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

//our components
import Header from '../components/Header';
import Footer from '../components/Footer';

// styles
//import {PageStyle} from '../styles/styles';
//const styles = StyleSheet.flatten(PageStyle);

const testIDs = require('./testIDs');

const CalendarsList = () => {

  return (
    <CalendarList
      testID={testIDs.calendarList.CONTAINER}
      current={'2020-06-10'}
      pastScrollRange={24}
      futureScrollRange={24}
      renderHeader={(date) => {
        const header = date.toString('MMMM yyyy');
        const [month, year] = header.split(' ');
        const textStyle = {
          fontSize: 18,
          fontWeight: 'bold',
          paddingTop: 10,
          paddingBottom: 10,
          color: '#5E60CE',
          paddingRight: 5
        };

        return(
          <View style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 10
          }}>
            <Text style={{marginLeft: 5, ...textStyle}}>{`${month}`}</Text>
            <Text style={{marginRight: 5, ...textStyle}}>{year}</Text>
          </View>
        );
      }}
      theme={{
        'stylesheet.calendar.header': {
          dayHeader: {
            fontWeight: '600',
            color: '#48BFE3'
          }
        },
        'stylesheet.day.basic': {
          today: {
            borderColor: '#48BFE3',
            borderWidth: 0.8
          },
          todayText: {
            color: '#5390D9',
            fontWeight: '800'
          }
        }
      }}
    />);

};

export default CalendarsList;