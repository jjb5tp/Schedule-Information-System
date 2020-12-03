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
import fire, {database} from '../components/firebase';

// styles
//import {PageStyle} from '../styles/styles';
//const styles = StyleSheet.flatten(PageStyle);

const testIDs = require('./testIDs');

class CalendarsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      categories: []
    }
  }

  componentDidMount() {
    console.log("pens")
    this.getInfo()
  }

  getInfo = async () => {
    const newItems = []
    const querySnapshot = await database.collection(fire.auth().currentUser.email).get()
    querySnapshot.forEach(function(documents) {
      //console.log(documents);
      var id = documents.id;
      var data = documents.data()
      
      console.log("data")
      console.log(data.assignments)
      newItems.push({id, data})
    });
    console.log(newItems)
    this.setState({
      categories: newItems,
      ready: true
    })
    
  }

  

  render() {
    console.log(this.state.categories)
    return (
      <Container>
        <Header title = "Calendar View" navigation = {this.props} addbutton = {true}/>
        <CalendarList
          testID={testIDs.calendarList.CONTAINER}
          current={'2012-05-16'}
          disableAllTouchEventsForDisabledDays
          pastScrollRange={69}
          futureScrollRange={69}
          markingType={'multi-dot'}
          markedDates={{
            '2012-05-08': {
              selected: true,
              dots: [
                {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
                {key: 'massage', color: 'red', selectedDotColor: 'white'},
              ],
            },
            '2012-05-09': {
              disabled: true,
              dots: [
                {key: 'vacation', color: 'green', selectedDotColor: 'red'},
                {key: 'massage', color: 'red', selectedDotColor: 'green'},
              ],
            },
          }}
          renderHeader={(date) => {
            const header = date.toString('MMMM, yyyy');
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
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 10
              }}>
              <Text style={textStyle}>{`${header}`}</Text>
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
        />
        
        <Footer navigation = {this.props} signoutbutton = {true} isListView = {false}/>
        
      </Container>
    );
  }

};

export default CalendarsList;