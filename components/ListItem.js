import React from 'react';
import { View, FlatList, Text } from 'react-native';

const ListItem = (props) => {
    const renderItem = (obj) => (
        // (obj.type == "class") ? (
        //     <View>
        //         <Text>Name: {obj.name}</Text>
        //         <Text>Day: {obj.day}</Text>
        //         <Text>Time:  {obj.time}</Text>
        //         <Text>Location: {obj.location}</Text>
        //         <Text>Repeat Until: {obj.repeatUntil}</Text>
        //     </View> ):(
        //     <View>
        //         <Text>Name: {obj.name}</Text>
        //         <Text>Due date: {obj.dueDate}</Text>
        //         <Text>Due time:  {obj.time}</Text>
        //         <Text>Recomendation: {obj.recommendation}</Text>
        //         <Text>Repeat Until: {obj.repeatUntil}</Text>
        //     </View>)


        //Testing code vvvv
        <View>
            <Text>Name: {obj.name}</Text>
            <Text>Due date: {obj.dueDate}</Text>
            <Text>Due time: {obj.time}</Text>
            <Text>Recomendation: {obj.recommendation}</Text>
            <Text>Repeat Until: {obj.repeatUntil}</Text>
        </View>
        //Testing ^^^^
      );
    const item = props.item;
    return (
        <View>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
            <FlatList
                data={item.objects}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ListItem;