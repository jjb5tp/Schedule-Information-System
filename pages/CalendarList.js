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

console.log(class1)

const testIDs = require('./testIDs');

class CalendarsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      categories: {},
      markedDates: {},
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

    this.getInfo();
  }

  getInfo = async () => {
    const categories = await database.collection(fire.auth().currentUser.email).get()

    var classesByName = []
    categories.forEach(function(category) {
      if (category.id != "---"){
        classesByName.push(category.id)
      }
    });


    var dates = {};
    var tempObject;
    var i;
    for (i = 0; i < classesByName.length; i++){
      var colorboi = await database.collection(fire.auth().currentUser.email).doc(classesByName[i]).get()
      var assignments = await database.collection(fire.auth().currentUser.email).doc(classesByName[i]).collection("assignments").get()
      assignments.forEach(doc => {
        if (doc.id == "---"){

        }
        else{
          if (doc.data()["dueDate"] in dates){
            var tempObj2 = {}
            tempObj2.color = colorboi.data()["color"]
            tempObj2.key = colorboi.data()["color"]
            dates[doc.data()["dueDate"]]["dots"].push(tempObj2)
            // console.log(tempObject)
          }
          else{
            var tempObj = {}
            var tempArray = []
            var tempObj2 = {}
            tempObj2.color = colorboi.data()["color"]
            tempObj2.key = colorboi.data()["color"]
            tempArray.push(tempObj2)
            tempObj["dots"] = tempArray
            dates[doc.data()["dueDate"]] = tempObj
          }
        }
        
        
      });

    }
    console.log("__________________________")
    console.log(dates)
    this.setState({
      markedDates: dates,
      ready: true,
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
          markedDates={this.state.markedDates}
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