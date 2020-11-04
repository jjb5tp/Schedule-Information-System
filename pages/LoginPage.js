import React, { Component } from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity, TextInput } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';
import firebase from '../components/firebase';

// styles
import {LoginPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LoginPageStyle);

class LandingPage extends Component {

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
        if (firebase.auth().currentUser){
            alert('already signed in');
        }
        else{
            const { navigation } = this.props;
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                alert(errorMessage);
            }).then( ()=> {
                if (firebase.auth().currentUser)
                    navigation.navigate('AgendaScreen') 
            });
        }
    }
    signUp = (email, password) => {
        if (firebase.auth().currentUser){
            alert('already signed in');
        }
        else{
            const { navigation } = this.props;
            //alert('email: ' + email + ' password: ' + password)
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                alert(errorMessage);
            }).then( ()=> {
                if (firebase.auth().currentUser)
                    navigation.navigate('AgendaScreen') 
            });
        }
    }

    signOut = () => {
        if (firebase.auth().currentUser){
            console.log(firebase.auth().currentUser);
            firebase.auth().signOut();
        }
        else{
            alert('not signed in');
        }
    }

    render() {
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

                </View>
                </Content>
            </Container>
        )
    }
}
export default LandingPage

