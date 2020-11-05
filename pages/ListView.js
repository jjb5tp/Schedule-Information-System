import React from 'react';
import { View, FlatList, Text } from 'react-native';

import Header from '../components/Header';
import ListItem from '../components/ListItem';

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

const ListOfItems = (props) => {
  const renderItem = ({ item }) => (
    <ListItem item={item} />
  );
  return (
    <View>
      <Header title = "List View" navigation = {props} backbutton = {true} addbutton = {true}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


export default ListOfItems;