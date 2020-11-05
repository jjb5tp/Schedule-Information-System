import React from 'react';
import { View, FlatList, Text } from 'react-native';

const ListItem = (props) => {
    const renderItem = ({item, index, separators}) => (
        (item.type == "class") ? (
            <View>
                <Text>Name: {item.name}</Text>
                <Text>Day: {item.day}</Text>
                <Text>Time:  {item.time}</Text>
                <Text>Location: {item.location}</Text>
                <Text>Repeat Until: {item.repeatUntil}</Text>
            </View> ):(
            <View>
                <Text>Name: {item.name}</Text>
                <Text>Due date: {item.dueDate}</Text>
                <Text>Due time:  {item.dueTime}</Text>
                <Text>Recomendation: {item.recommendation}</Text>
                <Text>Repeat Until: {item.repeatUntil}</Text>
            </View>)
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