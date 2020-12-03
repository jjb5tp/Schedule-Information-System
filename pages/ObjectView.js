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

class ListView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      categoryName: "",
      categoryInfo: "",
    }
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo = () => {
    const { route, navigation } = this.props;
    const categoryName = route.params.category;
    console.log(categoryName)
    var penis = database.collection(fire.auth().currentUser.email).doc(categoryName).get().then((output) => {
      console.log(output.data())
      this.setState({
        ready: true,
        categoryName: categoryName,
        categoryInfo: output.data()
      })
    })
    
  }


  renderItem = ({ item }) => (
    <ListItem item={item} />
  );

  

  render() {
    console.log(this.state.categoryInfo)
    return (
        <Container>
            <Header title = {this.state.categoryName} navigation = {this.props} backbutton = {true} addobjectbutton = {true}/>
            <Content scrollEnabled='false'>
                
                <View style = {{flex: 2, width: '100%'}}>
                    <Text>
                      {this.state.categoryName + "\n"}
                      hi there
                    </Text>
                </View>
                
            </Content>
        </Container>
    )
  }
}

export default ListView;