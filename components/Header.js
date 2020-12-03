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
    const addobjectbutton = props.addobjectbutton;
    const daysOfTheWeek = props.daysOfTheWeek;
    const cancelbutton = props.cancelbutton;
    const submitcategorybutton = props.submitcategorybutton;
    const submitobjectbutton = props.submitobjectbutton;
    const categoryinfo = props.categoryinfo;
    const objectinfo = props.objectinfo;
    

    return(
        
        <View style={styles.container}>
            {backbutton && 
                (
                <Button title="backbutton" onPress={() => navigation.goBack()} style = {styles.back_button}>
                    <Icon name="arrow-back" style={{color: 'white'}}/>
                    {/* <Text style={{color: 'white'}}>
                        Memes
                    </Text> */}
                </Button>
                )
            }
            {addbutton && (
                <Button title="addbutton" onPress={() => {navigation.navigate('AddCategory')}
                } style = {styles.add_button}>
                    <Text> Add </Text>
                </Button>)
            }
            {addobjectbutton && (
                <Button title="addbutton" onPress={() => {navigation.navigate('AddObject')}
                } style = {styles.add_button}>
                    <Text> Add </Text>
                </Button>)
            }
            {cancelbutton && 
                (
                <Button title="cancelbutton" onPress={() => navigation.goBack()} style = {styles.cancel_button}>
                     <Text> Cancel </Text>
                </Button>
                )
            }
            
            {submitcategorybutton && (
                <Button title="submitcategorybutton" onPress={() => {{
                    if (fire.auth().currentUser){
                        if (database.collection(fire.auth().currentUser.email) != null){
                            database.collection(fire.auth().currentUser.email).doc(categoryinfo.title).set({
                                description: categoryinfo.description,
                                color: categoryinfo.color,
                                assignments: [],
                            })
                            database.collection(fire.auth().currentUser.email).doc(categoryinfo.title).collection("assignments").doc("---").set({})
                        }
                        else {
                        }
                        navigation.goBack()
                    }
                }}}
                style = {styles.submit_button}>
                    <Text> Submit </Text>
                </Button>)
            }

            

            {submitobjectbutton && (
                <Button title="submitobjectbutton" onPress={() => {{
                    if (fire.auth().currentUser){
                        if (database.collection(fire.auth().currentUser.email) != null){
                            if (objectinfo.name == ""){
                                alert("Please enter a name")
                                return
                            }
                            database.collection(fire.auth().currentUser.email).doc(objectinfo.category).collection("assignments").doc(objectinfo.name).set({
                                dueDate: objectinfo.dueDate,
                                dueTime: objectinfo.dueTime,
                                description: objectinfo.description,
                            })

                        }
                        else {
                        }
                        navigation.goBack()
                    }

                }}}

                style = {styles.submit_button}>
                    <Text> Submit </Text>
                </Button>)
            }

            


            <Text style = {styles.title}> {props.title}</Text>
        </View>
        
    )
}


export default Header