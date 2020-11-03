import {StyleSheet } from 'react-native';


export const HeaderStyle = StyleSheet.create(
    {
        container:{
            height: 110,
            width: "100%",
            backgroundColor: '#09090B',
            justifyContent: 'flex-end',
            shadowColor: 'grey',
            shadowOpacity: 100,
            shadowOffset: {width: 0, height: 4.5},

        },
        title: {
            marginBottom: 5,
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'center',
        },
        back_button: {
            alignSelf: 'flex-start', // the button will be on the left side
            justifyContent: 'flex-start', // the text in the button will be on the left side
            alignItems: 'flex-end', // the text in the button will be on the bottom side
            backgroundColor: 'transparent',
            backgroundColor: 'transparent',
            position: 'absolute',
            height: '100%',
            width: '100%',
        },
        back_button_text: {
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '500',
        },
        add_button: {

        },
        days_of_the_week: {

        },
    }
)

export const PageStyle = StyleSheet.create(
    {
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            //backgroundColor: 'green',
        },
        button: {
            alignSelf: 'center',
            shadowColor: 'grey',
            shadowOpacity: 50,
            shadowOffset: {width: 0, height: 4.5},
            backgroundColor: '#588DF3',
            position: 'absolute',
            height: 45,
        },
    }
)