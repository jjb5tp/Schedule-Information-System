import React, { Component } from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity, TextInput } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';
import fire, {database} from '../components/firebase';

// styles
import {LoginPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LoginPageStyle);

class AddObject extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: "",
            name: "",
            dueDate: "",
            dueTime: "",
            recommendation: "",
            repeatUntil: "",
        }
    }
    
    handleCategory = (text) => {
        this.setState({ category: text })
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
    handleRecommendation = (text) => {
        this.setState({ recommendation: text })
    }
    handleRepeatUntil = (text) => {
        this.setState({ repeatUntil: text })
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
                <Header title = "Add New Object" navigation = {this.props} cancelbutton = {true} submitbutton = {true} objectinfo = {this.state}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <View style = {styles.container}>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Category"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.han}/>

                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Name"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleName}/>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Due Date"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDueDate}/>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Due Time"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDueTime}/>

                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Due Time"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleRecommendation}/>

                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Due Time"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleRepeatUntil}/>

                </View>
                </Content>
            </Container>
        )
    }
}
export default AddObject

