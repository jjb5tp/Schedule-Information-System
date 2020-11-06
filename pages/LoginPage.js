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
    signUp = (email, password) => {
        if (fire.auth().currentUser){
            alert('already signed in');
        }
        else{
            const { navigation } = this.props;
            
            //alert('email: ' + email + ' password: ' + password)
            fire.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                alert(errorMessage);
            }).then( (error)=> {
                if (error){
                    database.collection(email).doc("first").set({})
                    navigation.navigate('CalendarList')
                }
            });
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
        return (
            <Container>
                <Header title = "Login" navigation = {this.props} backbutton = {false}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <View style = {styles.container}>
                    <Text>
                        {"\t"}If you are already logged in, you may sign out or go to one of the views.
                    </Text>
                    <Text>
                        {"\t"}Otherwise, input an email and password, and either create a new account with it or log into an existing one.
                    </Text>
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
                        () => this.signOut()
                    }>
                        <Text style = {styles.submitButtonText}> Sign out </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.signUp(this.state.email, this.state.password)
                    }>
                        <Text style = {styles.submitButtonText}> New user? Register here </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {()=> {
                        if (fire.auth().currentUser){
                            navigation.navigate('CalendarList')
                        }
                        else{
                            alert('need to be signed in');
                        }
                    }}>
                        <Text style = {styles.submitButtonText}> go to calendar view </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {()=>{
                        if (fire.auth().currentUser){
                            navigation.navigate('ListView')
                        }
                        else{
                            alert('need to be signed in');
                        }
                    }}>
                        <Text style = {styles.submitButtonText}> go to list view </Text>
                    </TouchableOpacity>

                </View>
                </Content>
            </Container>
        )
    }
}
export default LoginPage

