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
const class1 = {key:'class1', color: 'red'};
const class2 = {key:'class2', color: 'blue'};
const class3 = {key:'class3', color: 'green'};

const testIDs = require('./testIDs');

class CalendarsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      categories: {},
    }
  }

  componentDidMount() {
    var newItems = {};
    database.collection(fire.auth().currentUser.email).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(documents) {
        //console.log(documents);
        var id = documents.id;
        var data = documents.data()
        newItems[id] = data
      });
    }).then(
      this.setState({
        categories: newItems
      })
    ).catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <Container>
        <Header title = "Calendar View" navigation = {this.props} addbutton = {true}/>
        <CalendarList
          testID={testIDs.calendarList.CONTAINER}
          current={'2020-12-02'}
          pastScrollRange={69}
          futureScrollRange={69}
          theme={{
            textSectionTitleDisabledColor: 'gray',
            dayTextColor: 'white',
            calendarBackground:"black",
            'stylesheet.calendar.header': {
              dayHeader: {
                fontWeight: '600',
                color: 'white'
              }
            },
            'stylesheet.day.basic': {
              today: {
                borderColor: 'blue',
                borderWidth: 0.8
              },
              todayText: {
                color: 'white',
                fontWeight: '800'
              }
            }
          }}
          markedDates={{
            '2020-12-25': {dots: [class1]},
            '2020-12-26': {dots: [class2]},
            '2020-12-27': {dots: [class3]},
            // '2020-12-02': {selected:true}
          }}
          markingType={'multi-dot'}
          renderHeader={(date) => {
            const header = date.toString('MMMM, yyyy');
            const [month, year] = header.split(' ');
            const textStyle = {
              fontSize: 18,
              fontWeight: 'bold',
              paddingTop: 10,
              paddingBottom: 10,
              color: 'white',
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
          
        />
        
        <Footer navigation = {this.props} signoutbutton = {true} isListView = {false}/>
        
      </Container>
    );
  }

};

export default CalendarsList;