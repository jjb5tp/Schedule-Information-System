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

class AddCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            color: "",
        }
    }
    

    handleTitle = (text) => {
        this.setState({ title: text })
    }
    handleDescription = (text) => {
        this.setState({ description: text })
    }
    handleColor = (text) => {
        this.setState({ color: text })
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
        const { route, navigation } = this.props;
        return (
            <Container>
                <Header title = "Add New Category" navigation = {this.props} cancelbutton = {true} submitbutton = {true} categoryinfo = {this.state}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <View style = {styles.container}>

                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Title"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleTitle}/>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Description"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleDescription}/>
                    
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Color (in hexadecimal for now)"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleColor}/>
                    
                    

                    

                </View>
                </Content>
            </Container>
        )
    }
}
export default AddCategory

