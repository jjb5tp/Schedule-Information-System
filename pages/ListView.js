// react imports
import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, Container, Content, CardItem, Icon, Right } from 'native-base';

// components
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import fire, {database} from '../components/firebase';

// styles
import {ListViewStyle} from '../styles/styles';
const styles = StyleSheet.flatten(ListViewStyle);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: "my description",
    color: "726B74",
    objects: [
        {
            id: "id1",
            type: "class",
            name: "Class1",
            day: "Monday",
            time: "2:00 - 3:15",
            location: "online",
            repeatUntil: "tommorow"
        },
        {
            id: "id2",
            type: "assignment",
            name: "HW1",
            dueDate: "Monday, December 3", 
            dueTime: "2:00 - 3:15",
            recommendation: "1/4 of assignment per week",
            repeatUntil: "N/A",
        }
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description: "my 2nd description",
    color: "LOL",
    objects: [
        {
            id: "id1",
            type: "class",
            name: "Class",
            day: "Monday",
            time: "2:00 - 3:15",
            location: "online",
            repeatUntil: "tommorow"
        },
        {
            id: "id2",
            type: "assignment",
            name: "HW1",
            dueDate: "Monday",
            dueTime: "2:00 - 3:15",
            recommendation: "1/4 of assignment per week",
            repeatUntil: "N/A",
        }
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description: "my 3rd description",
    color: "AHHHH",
    objects: [
        {
            id: "id1",
            type: "class",
            name: "Class",
            day: "Monday",
            time: "2:00 - 3:15",
            location: "online",
            repeatUntil: "tommorow"
        },
        {
            id: "id2",
            type: "assignment",
            name: "HW2",
            dueDate: "Monday",
            dueTime: "2:00 - 3:15",
            repeatUntil: "N/A",
        },
        {
            id: "id3",
            type: "assignment",
            name: "HW3",
            dueDate: "Monday",
            dueTime: "2:00 - 3:15",
            recommendation: "1/4 of assignment per week",
            repeatUntil: "N/A",
        },
        {
            id: "id4",
            type: "assignment",
            name: "HW4",
            dueDate: "Monday",
            dueTime: "2:00 - 3:15",
            recommendation: "1/4 of assignment per week",
            repeatUntil: "N/A",
        }
    ]
  },
];

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
    if (!this.state.ready) return null;
    else{
      //console.log(this.state.categories)
      return (
        <View>
          <Header title = "List View" navigation = {this.props} backbutton = {true} addbutton = {true} isListView = {true}/>
          {/* <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          /> */}
          {/*console.log(this.state.categories)*/}
          <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
              () => this.getInfo()
          }>
              <Text style = {styles.submitButtonText}> Refresh page </Text>
          </TouchableOpacity>
          
          {this.state.categories.map((info) =>{
            return(
              <Card key = {info.id}>
                <CardItem>
                    <Text>
                        {info.id}
                    </Text>
                </CardItem>
              </Card>
            )
          })}
        
        </View>
      );
    }
  }
}

export default ListView;