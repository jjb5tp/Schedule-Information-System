import React from 'react';
import {StyleSheet, View, TouchableOpacity } from 'react-native';
import {Text, Button, Icon, Left, Right} from 'native-base'

import {HeaderStyle} from '../styles/styles';
const styles = StyleSheet.flatten(HeaderStyle);

import fire, {database} from '../components/firebase';



const Header = (props) => {
    
    const { navigation } = props.navigation;
    const backbutton = props.backbutton;
    const weekDateRange = props.weekDateRange;
    const addbutton = props.addbutton;
    const daysOfTheWeek = props.daysOfTheWeek;
    const cancelbutton = props.cancelbutton;
    const submitbutton = props.submitbutton;
    const categoryinfo = props.categoryinfo;

    const isListView = props.isListView;

    const useMeDaddy = props.useMeDaddy;
    

    return(
        
        <View style={styles.container}>
            {backbutton && 
                (
                <Button title="Go back" onPress={() => navigation.goBack()} style = {styles.back_button}>
                    <Icon name="arrow-back" style={{color: 'white'}}/>
                    {/* <Text style={{color: 'white'}}>
                        Memes
                    </Text> */}
                </Button>
                )
            }
            {addbutton && (
                <Button title="Go back" onPress={() => {{navigation.navigate('AddCategory', {
                    onGoBack: () => useMeDaddy,
                })}}
                } style = {styles.add_button}>
                    <Text> Add </Text>
                </Button>)
            }
            {cancelbutton && 
                (
                <Button title="Go back" onPress={() => navigation.goBack()} style = {styles.cancel_button}>
                     <Text> Cancel </Text>
                </Button>
                )
            }
            {submitbutton && (
                <Button title="Go back" onPress={() => {{
                    if (fire.auth().currentUser){
                        if (database.collection(fire.auth().currentUser.email) == null){
                            if (categoryinfo.description){
                                database.collection(fire.auth().currentUser.email).doc(categoryinfo.title).update({
                                    description: categoryinfo.description,
                                })
                            }
                            if (categoryinfo.color){
                                database.collection(fire.auth().currentUser.email).doc(categoryinfo.title).update({
                                    color: categoryinfo.color,
                                })
                            }
                        }
                        else {
                            database.collection(fire.auth().currentUser.email).doc(categoryinfo.title).set({
                                description: categoryinfo.description,
                                color: categoryinfo.color,
                            })
                        }
                        // {!isListView && 
                        //     navigation.navigate('ListView', {})
                        // }
                        // {isListView && 
                        //     navigation.navigate('CalendarList', {})
                        // }
                        navigation.goBack()
                    }

                }}
                } style = {styles.submit_button}>
                    <Text> Submit </Text>
                </Button>)
            }

            


            <Text style = {styles.title}> {props.title}</Text>
        </View>
        
    )
}


export default Header