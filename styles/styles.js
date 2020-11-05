import {StyleSheet } from 'react-native';


export const HeaderStyle = StyleSheet.create({
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
        backgroundColor: 'purple',
        //backgroundColor: 'transparent',
        position: 'absolute',
        height: '40%',
        width: '25%',
    },
    add_button: {
        alignSelf: 'flex-end', // the button will be on the left side
        justifyContent: 'flex-end', // the text in the button will be on the left side
        alignItems: 'flex-end', // the text in the button will be on the bottom side
        backgroundColor: 'purple',
        //backgroundColor: 'transparent',
        position: 'absolute',
        height: '40%',
        width: '25%',
    },
    cancel_button: {
        alignSelf: 'flex-start', // the button will be on the left side
        justifyContent: 'flex-start', // the text in the button will be on the left side
        alignItems: 'flex-end', // the text in the button will be on the bottom side
        backgroundColor: 'purple',
        //backgroundColor: 'transparent',
        position: 'absolute',
        height: '40%',
        width: '25%',
    },
    submit_button: {
        alignSelf: 'flex-end', // the button will be on the left side
        justifyContent: 'flex-end', // the text in the button will be on the left side
        alignItems: 'flex-end', // the text in the button will be on the bottom side
        backgroundColor: 'purple',
        //backgroundColor: 'transparent',
        position: 'absolute',
        height: '40%',
        width: '25%',
    },
    back_button_text: {
        color: '#F3F3F3',
        fontSize: 18,
        fontWeight: '500',
    },
    days_of_the_week: {

    },
})

export const PageStyle = StyleSheet.create({
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
})

export const CalendarYearViewStyle = StyleSheet.create({

})

export const AgendaScreenStyle = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
})

export const LoginPageStyle = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })