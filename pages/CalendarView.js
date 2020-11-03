import React, { Component } from 'react';
import {StyleSheet, ImageBackground } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

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
                <Header title = "header" navigation = {this.props} backbutton = {false}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                        <Text>
                            Fuck
                        </Text>
                </Content>
            </Container>
        )
    }
}
export default CalendarYearView

