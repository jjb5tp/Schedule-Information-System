// react imports
import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, Container, Content, CardItem, Icon, Right } from 'native-base';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListItem from '../components/ListItem';
import fire, {database} from '../components/firebase';

// styles
import {ListViewStyle} from '../styles/styles';
const styles = StyleSheet.flatten(ListViewStyle);

class ListView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      ready: false,
    }
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo = () => {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.setState({
        ready: false,
      })
    });
    const newItems = []
    database.collection(fire.auth().currentUser.email).get().then((querySnapshot) => {
      querySnapshot.forEach(function(documents) {
        //console.log(documents);
        var id = documents.id;
        var data = documents.data()
        newItems.push({id, data})
      });
    }).then(() => {
      this.setState({
        categories: newItems,
        ready: true
      })
    }).catch((error) => {
      console.error(error);
    })
    
  }


  renderItem = ({ item }) => (
    <ListItem item={item} />
  );

  

  render() {
    const { navigation } = this.props;
    if (!this.state.ready) return null;
    else{
      //console.log(this.state.categories)
      return (
        <View style={{ backgroundColor: 'purple', height: '100%' }}>
          <Header title = "Classes" navigation = {this.props} addbutton = {true} isListView = {true}/>

          <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
              () => this.getInfo()
          }>
              <Text style = {styles.submitButtonText}> Refresh page </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
              () => navigation.navigate('CalendarScreen')
          }>
              <Text style = {styles.submitButtonText}> Calendar Screen </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
              () => navigation.navigate('CalendarYearView')
          }>
              <Text style = {styles.submitButtonText}> Calendar Year View </Text>
          </TouchableOpacity>

          
          
          {this.state.categories.map((info, index) =>{
            

            return(
              <Card key = {index}>
                <CardItem button onPress={()=>navigation.navigate('ObjectView', {
                  category: info.id,
                })}>
                    <Text>
                        {info.id}
                    </Text>
                </CardItem>
              </Card>
            )
          })}
          <Footer navigation = {this.props} signoutbutton = {true} isListView = {true}/>
        </View>
      );
    }
  }
}

export default ListView;