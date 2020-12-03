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

class SignupPage extends Component {

    constructor(props) {
        super(props)
        const {route} = this.props;
        this.state = {
            email: route.params.email,
            password: route.params.password,
            password2: "",
            loggedIn: "",
        }
    }
    

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    handlePassword2 = (text) => {
        this.setState({ password2: text })
    }
    
    signUp = (email, password, password2) => {
        if (fire.auth().currentUser){
            alert('already signed in');
        }
        else{
            if (this.state.password != this.state.password2){
                alert('Passwords do not match')
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
                        database.collection(email).doc("---").set({})
                        navigation.navigate('CalendarList')
                    }
                });
            }
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

    cancel = () => {
        if (fire.auth().currentUser){
            alert('already signed in');
        }
        else{
            const { navigation } = this.props;
            navigation.navigate('LoginPage')
        }
    }

    // componentDidMount() {
    //     const { route } = this.props;
    //     this.handleEmail(route.params.email)
    //     this.handlePassword(route.params.password)
    // }

    render() {
        const { route, navigation } = this.props;
        const email = route.params.email;
        const password = route.params.password;
        if (fire.auth().currentUser){
            navigation.navigate("ListView")
        }
        
        return (
            <Container>
                <Header title = "Sign Up" navigation = {this.props} backbutton = {false}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                    
                    <View style = {styles.container}>

                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email"
                        placeholderTextColor = "#9a73ef"
                        value = {this.state.email}
                        autoCapitalize = "none"
                        onChangeText = {this.handleEmail}/>
                        
                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#9a73ef"
                        value = {this.state.password}
                        autoCapitalize = "none"
                        onChangeText = {this.handlePassword}/>

                        <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Confirm Password"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {this.handlePassword2}/>

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
                            () => this.signUp(this.state.email, this.state.password, this.state.password2)
                        }>
                            <Text style = {styles.submitButtonText}> Submit </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {
                            () => this.cancel()
                        }>
                            <Text style = {styles.submitButtonText}> Cancel </Text>
                        </TouchableOpacity>

                    </View>
                    
                </Content>
            </Container>
        )
    }
}
export default SignupPage

