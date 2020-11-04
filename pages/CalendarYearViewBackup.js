import React, { Component } from 'react';

//react-native components
import {StyleSheet, ImageBackground, View } from 'react-native';
import {Button, Text, Container, Content } from 'native-base';

//online components
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

//our components
import Header from '../components/Header';
import Footer from '../components/Footer';

// styles
import {PageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(PageStyle);

class CalendarYearView extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                    <View style={{ paddingTop: 50, flex: 1 }}>
                        <CalendarList

                            // Callback which gets executed when visible months change in scroll view. Default = undefined
                            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                            // Max amount of months allowed to scroll to the past. Default = 50
                            pastScrollRange={50}
                            // Max amount of months allowed to scroll to the future. Default = 50
                            futureScrollRange={50}
                            // Enable or disable scrolling of calendar list
                            scrollEnabled={true}
                            // Enable or disable vertical scroll indicator. Default = false
                            showScrollIndicator={true}


                            // Initially visible month. Default = Date()
                            current={'2020-11-04'}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={'1998-09-08'}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            maxDate={'2022-12-31'}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={(day) => {console.log('selected day', day)}}
                            // Handler which gets executed on day long press. Default = undefined
                            onDayLongPress={(day) => {console.log('selected day', day)}}
                            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                            monthFormat={'yyyy MM'}
                            // Handler which gets executed when visible month changes in calendar. Default = undefined
                            onMonthChange={(month) => {console.log('month changed', month)}}
                            // Hide month navigation arrows. Default = false
                            hideArrows={true}
                            // Replace default arrows with custom ones (direction can be 'left' or 'right')
                            renderArrow={(direction) => (<Arrow/>)}
                            // Do not show days of other months in month page. Default = false
                            hideExtraDays={true}
                            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                            // day from another month that is visible in calendar page. Default = false
                            disableMonthChange={true}
                            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                            firstDay={1}
                            // Hide day names. Default = false
                            hideDayNames={false}
                            // Show week numbers to the left. Default = false
                            showWeekNumbers={false}
                            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                            onPressArrowRight={addMonth => addMonth()}
                            // Disable left arrow. Default = false
                            disableArrowLeft={true}
                            // Disable right arrow. Default = false
                            disableArrowRight={true}
                            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                            disableAllTouchEventsForDisabledDays={false}
                            // Replace default month and year title with custom one. the function receive a date as parameter.
                            renderHeader={(date) => {date.month}}
                            // Enable the option to swipe between months. Default = false
                            enableSwipeMonths={true}

                            // style={{
                            //     borderWidth: 1,
                            //     borderColor: 'gray',
                            //     height: 350
                            //   }}
                            //   // Specify theme properties to override specific styles for calendar parts. Default = {}
                            //   theme={{
                            //     backgroundColor: '#ffffff',
                            //     calendarBackground: '#ffffff',
                            //     textSectionTitleColor: '#b6c1cd',
                            //     textSectionTitleDisabledColor: '#d9e1e8',
                            //     selectedDayBackgroundColor: '#00adf5',
                            //     selectedDayTextColor: '#ffffff',
                            //     todayTextColor: '#00adf5',
                            //     dayTextColor: '#2d4150',
                            //     textDisabledColor: '#d9e1e8',
                            //     dotColor: '#00adf5',
                            //     selectedDotColor: '#ffffff',
                            //     arrowColor: 'orange',
                            //     disabledArrowColor: '#d9e1e8',
                            //     monthTextColor: 'blue',
                            //     indicatorColor: 'blue',
                            //     textDayFontFamily: 'monospace',
                            //     textMonthFontFamily: 'monospace',
                            //     textDayHeaderFontFamily: 'monospace',
                            //     textDayFontWeight: '300',
                            //     textMonthFontWeight: 'bold',
                            //     textDayHeaderFontWeight: '300',
                            //     textDayFontSize: 16,
                            //     textMonthFontSize: 16,
                            //     textDayHeaderFontSize: 16
                            //   }}
                        />
                    </View>
            </Container>
        )
    }
}
export default CalendarYearView

