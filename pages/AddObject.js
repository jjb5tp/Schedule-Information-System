import React, { Component } from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity, TextInput } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';
import fire, {database} from '../components/firebase';

// styles
import {AddObjectStyle} from '../styles/styles';
const styles = StyleSheet.flatten(AddObjectStyle);


class AddObject extends Component {

    constructor(props) {
        super(props)
        const {route} = this.props;
        this.state = {
            category: route.params.category,
            name: "",
            dueDate: "",
            dueTime: "",
            description: "",
        }
    }
    
    handleName = (text) => {
        this.setState({ name: text })
    }
    handleDueDate = (text) => {
        this.setState({ dueDate: text })
    }
    handleDueTime = (text) => {
        this.setState({ dueTime: text })
    }
    handleDescription = (text) => {
        this.setState({ description: text })
    }
    handleDateChange = (text) => {
        this.setState({ date: text })
    }
    handleTimeChange = (text) => {
        this.setState({ time: text })
    }
    
    cancel = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    submit = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header title = "Add New Assignment" navigation = {this.props} cancelbutton = {true} submitobjectbutton = {true} objectinfo = {this.state}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <View style = {styles.container}>

                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Name"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleName}/>

                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Description"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDescription}/>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Due Date (in the form YYY-MM-DD)"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDueDate}/>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Due Time"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDueTime}/>

                    

                </View>
                </Content>
            </Container>
        )
    }
}
export default AddObject