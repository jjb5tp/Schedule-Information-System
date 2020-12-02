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

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            loggedIn: "",
        }
    }
    

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    
    login = (email, password) => {
        if (fire.auth().currentUser){
            alert('already signed in');
        }
        else{
            const { navigation } = this.props;
            fire.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                alert(error);
            }).then( (error)=> {
                if (error)
                    navigation.navigate('CalendarList') 
            });
        }
    }
    signUp = () => {
        if (fire.auth().currentUser){
            alert('already signed in');
        }
        else{
            const { navigation } = this.props;
            navigation.navigate('SignupPage', { email: this.state.email, password: this.state.password })
        }
    }

    signOut = () => {
        if (fire.auth().currentUser){
            fire.auth().signOut();
        }
        else{
            alert('not signed in');
        }
    }
    
    render() {
        const { navigation } = this.props;
        if (fire.auth().currentUser){
            navigation.navigate("ListView")
        }
        return (
            <Container>
                <Header title = "Login" navigation = {this.props} backbutton = {false}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                    
                    <View style = {styles.container}>
                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {this.handleEmail}/>
                        
                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {this.handlePassword}/>
                        
                        <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.login(this.state.email, this.state.password)
                        }>
                            <Text style = {styles.submitButtonText}> Login </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.signUp()
                        }>
                            <Text style = {styles.submitButtonText}> New user? Create an account here </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.forceUpdate()
                        }>
                            <Text style = {styles.submitButtonText}> Refresh? </Text>
                        </TouchableOpacity>

                    </View>
                    
                </Content>
            </Container>
        )
    }
}
export default LoginPage

