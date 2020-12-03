import React from 'react';
import {StyleSheet, View, TouchableOpacity } from 'react-native';
import {Text, Button, Icon, Left, Right} from 'native-base'

import {FooterStyle} from '../styles/styles';
const styles = StyleSheet.flatten(FooterStyle);

import fire, {database} from '../components/firebase';



const Footer = (props) => {
    
    const { navigation } = props.navigation;

    const signoutbutton = props.signoutbutton;
    const isListView = props.isListView;
    const isCalendarView = ! isListView;    

    return(
        
        <View style={styles.container}>
            
            <Button title="signoutbutton" onPress={() => {
                if (fire.auth().currentUser){
                    fire.auth().signOut();
                }
                else{
                    alert('not signed in');
                }
                navigation.navigate('LoginPage')
            }
            } style = {styles.sign_out_button}>
                <Text style={{color: 'white'}}>
                    Sign Out
                </Text>
            </Button>
            
            {isListView && 
                (
                <Button title="calendarviewbutton" onPress={() => {
                    if (fire.auth().currentUser){
                        navigation.navigate("CalendarList")
                    }
                    else{
                        alert('not signed in');
                        navigation.navigate('LoginPage')
                    }
                }
                } style = {styles.calendar_view_button}>
                    <Text style={{color: 'white'}}>
                        Calendar View
                    </Text>
                </Button>
                )
            }
            
            {isCalendarView && 
                (
                <Button title="listviewbutton" onPress={() => {
                    if (fire.auth().currentUser){
                        navigation.navigate("ListView")
                    }
                    else{
                        alert('not signed in');
                        navigation.navigate('LoginPage')
                    }
                }
                } style = {styles.list_view_button}>
                    <Text style={{color: 'white'}}>
                        List View
                    </Text>
                </Button>
                )
            }

        </View>
        
    )
}


export default Footer