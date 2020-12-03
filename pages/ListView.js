// react imports
import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Container, Content, Icon, Right } from 'native-base';

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
      toggle: true,
    }
  }

  componentWillUnmount(){
    
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo = async () => {
    const categories = await database.collection(fire.auth().currentUser.email).get()

    var classesByName = []
    categories.forEach(function(category) {
      if (category.id != "---"){
        classesByName.push(category.id)
      }
    });

    var tempArray = [];
    var tempObject;
    var i;
    for (i = 0; i < classesByName.length; i++){
      tempObject = {}
      const classBoi = await database.collection(fire.auth().currentUser.email).doc(classesByName[i]).get()
      tempObject["name"] = classBoi.id;
      tempObject["color"] = classBoi.data().color
      tempObject["description"] = classBoi.data().description
      var nestedArray = [];
      var nestedObject;

      var assignments = await database.collection(fire.auth().currentUser.email).doc(classesByName[i]).collection("assignments").get()
      assignments.forEach(doc => {
        if (doc.id == "---"){

        }
        else{
          nestedObject = {};
          nestedObject["name"] = doc.id;
          nestedObject["dueDate"] = doc.data()["dueDate"];
          nestedObject["dueTime"] = doc.data()["dueTime"];
          nestedObject["description"] = doc.data()["description"];
          nestedArray.push(nestedObject)
        }
        
      });
      tempObject["assignments"] = nestedArray;

      tempArray.push(tempObject)
    }
    this.setState({
      categories: tempArray,
      ready: true,
    })

  }

  renderItem = ({ item }) => (
    <ListItem item={item} />
  );

  deleteAssignment = async (className, assignmentName) => {

    const rest = await database.collection(fire.auth().currentUser.email).doc(className).collection("assignments").doc(assignmentName).delete()
  }


  deleteClass = async (className) => {
    var batchSize = 5;

    this.deleteSubCollection(database, className, batchSize)

    const res = await database.collection(fire.auth().currentUser.email).doc(className).delete()

    this.setState({
      toggle: !this.state.toggle,
    })
    
  }

  deleteSubCollection = async (db, className, batchSize) => {
    const collectionRef = db.collection(fire.auth().currentUser.email).doc(className).collection("assignments");
    const query = collectionRef.orderBy('__name__').limit(batchSize);
  
    return new Promise((resolve, reject) => {
      this.deleteQueryBatch(db, query, resolve).catch(reject);
    });
  }
  
  deleteQueryBatch = async (db, query, resolve) => {
    const snapshot = await query.get();
  
    const batchSize = snapshot.size;
    if (batchSize === 0) {
      // When there are no documents left, we are done
      resolve();
      return;
    }
  
    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
  
    // Recurse on the next process tick, to avoid
    // exploding the stack.
    this.deleteQueryBatch(db, query, resolve);
    
  }


  render() {
    const { navigation } = this.props;
    if (!this.state.ready) return null;
    var empty = false;
    if (this.state.categories.length == 0)
      empty = true;
      
    return (
      
      <Container style={{ height: '100%' }}>
        <Header title = "Classes" navigation = {this.props} addbutton = {true} isListView = {true}/>
        <Content>
          <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
              () => this.getInfo()
          }>
              <Text style = {styles.submitButtonText}> Refresh page </Text>
          </TouchableOpacity>

          {empty && 
            <CardItem header bordered style = {styles.carditem}>
                <Text>
                    Click the "Add" button to add classes!
                </Text>
            </CardItem>
          }
          
          
          {this.state.categories.map((tempClass, index) =>{

            return(
              <Card key = {index} style = {styles.card}>
                <CardItem header bordered style = {styles.carditem}>
                    <Text>
                        {tempClass.name}
                    </Text>

                    <TouchableOpacity style = {styles.editButton} onPress = { () => this.deleteClass(tempClass.name) }>
                        <Text style = {styles.submitButtonText}> Delete Class </Text>
                    </TouchableOpacity>

                </CardItem>

                <CardItem bordered style = {styles.carditem}>
                  <Body>
                    <Text>
                      Color: {tempClass["color"]}
                    </Text>
                  </Body>
                </CardItem>

                <CardItem bordered style = {styles.carditem}>
                  <Body>
                    <Text>
                      Description: {tempClass["description"]}
                    </Text>
                  </Body>
                </CardItem>

                <CardItem bordered style = {styles.carditem}>
                  <Body >
                    <Text>
                      Assignments:
                    </Text>
                    


                    {tempClass["assignments"].map((Objects, index1) =>{
                      return(
                        <CardItem bordered style = {styles.carditem}>
                          <Body>
                            
                            <Text>
                              Assignment name: {Objects["name"]}
                            </Text>
                            <Text>
                              Description: {Objects["description"]}
                            </Text>
                            <Text>
                              Due Date: {Objects["dueDate"]}
                            </Text>
                            <Text>
                              Due Time: {Objects["dueTime"]}
                            </Text>
                          </Body>
                          <TouchableOpacity style = {styles.deleteButton} onPress = { () => this.deleteAssignment(tempClass.name, Objects["name"]) }>
                            <Text style = {styles.submitButtonText}> Delete Assignment </Text>
                          </TouchableOpacity>
                        </CardItem>
                      )
                    })}

                    
                  </Body>
                </CardItem>

                <TouchableOpacity
                  style = {styles.editButton}
                  onPress = {
                      () => navigation.navigate('AddObject', {category: tempClass.name})
                  }>
                      <Text style = {styles.submitButtonText}> Add New Assignment </Text>
                </TouchableOpacity>

                
                
              </Card>
            )

          })}
          <Body>
            <Text>
              
            </Text>
            <Text>
              
            </Text>
            <Text>
              
            </Text>
            <Text>
              
            </Text>
          </Body>
        </Content>
        <Footer navigation = {this.props} signoutbutton = {true} isListView = {true}/>
      </Container>
    );
    
  }
}

export default ListView;