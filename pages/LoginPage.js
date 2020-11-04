import React, { Component } from 'react';
import {StyleSheet, ImageBackground } from 'react-native';

//react-native components
import {Button, Text, Container, Content, View } from 'native-base';

//our components
import Header from '../components/Header';

// styles
import {LoginPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LoginPageStyle);

import * as Google from 'expo-google-app-auth';

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            signedIn: false,
            name: "",
            photoUrl: "",
        }
    }


    async signIn() {
        try {
          const result = await Google.logInAsync({
            androidClientId: 809552998630-ijieo2fcfbkhbduqgr2igfgl0a593oun.apps.googleusercontent.com,
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            this.setState({
                signedIn: true,
                name: result.user.name,
                photoUrl: result.user.photoUrl,
            })
            console.log(result);
          } else {
            console.log("cancelled");
          }
        } catch (e) {
            console.log("error: ", e);
        }
      }


    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header title = "header" navigation = {this.props} backbutton = {false}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                {!this.signedIn &&
                    <View>
                        <Text style={styles.header}>Sign In With Google</Text>
                        <Button title = "Sign in with Google" onPress = {() => this.props.signIn()}/>
                    </View>
                }
                {this.signedIn &&
                    <View style = {styles.container}>
                        <Text style={styles.header}>Welcome:{ this.props.name}</Text>
                        <Image style = {styles.image} source =  {{ uri: this.props.photoUrl}} />
                    </View>
                }
                        
                </Content>
            </Container>
        )
    }
}
export default LoginPage

