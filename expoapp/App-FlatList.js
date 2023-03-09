import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TODOS } from './mock-data/todos';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})
const App = () => {

    const [todos, setTodos] = useState(TODOS);

    const onSelect = selectedItem => {
        console.log(selectedItem)
        Alert.alert(JSON.stringify(selectedItem))
    }

    return <View style={styles.container}>
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text onPress={() => {
                    onSelect(item)
                }} style={styles.item}>{item.title}</Text>
            )}
        />
    </View>
}
export default App;